import { Component, OnInit, ViewChild } from '@angular/core';
import { Timetable } from './timetable';
import { Lesson } from '../../lesson/lesson';
import { LessonOfDay } from './lesson-of-day';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { LessonComponent } from './lesson/lesson.component';
import { MakeupLessonComponent } from './makeup-lesson/makeup-lesson.component';
import { AuthService } from '../../auth/auth.service';
import { LessonService } from '../../lesson/lesson.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  providers: [LessonService]
})
export class TimetableComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  @ViewChild(MakeupLessonComponent)
  makeupLesson:MakeupLessonComponent;

  frLson:Lesson;

  timetable: Timetable;
  weekNo:number

  constructor(private authService:AuthService, private lessonService: LessonService){
    this.timetable = new Timetable();
  };

  ngOnInit(): void {
    this.titleBar.title = "時間表";
    this.weekNo = 1;
    this.timetable.lessonOfDays = [];
    this.reloadLson();

  }

  public reloadLson():void{
    this.lessonService.getWeeklyLsonByStd(this.authService.user.name,this.weekNo)
    .then(lessons=>{
      this.lsonToLsonDay(lessons);
    }).catch(()=>{
      this.titleBar.msgBox.sendAlertMsg("Oops!");
    });
  }

  public chkMkupLson(l:Lesson):void{
    console.log("chkMkup event capture");
    this.frLson = l;
    this.titleBar.msgBox.sendLoadingMsg();
    this.lessonService.getMkup(l,this.authService.user.name).then(lessons=>{
      console.log(lessons);
      if(lessons.length>0){
        this.titleBar.msgBox.clearMsg();
        jQuery('#makeupLessonReveal').foundation('open');
        this.makeupLesson.lessons = lessons;
      }else{
        this.titleBar.msgBox.sendWarningMsg("無堂可轉");
      }
    });
  }

  public aplyMkup(l:Lesson):void{
    console.log("aplyMkup event capture");
    this.titleBar.msgBox.sendLoadingMsg();
    if(l.id == null){
      l.id = this.frLson.id;
      this.lessonService.aplyNewMkup(this.authService.user.id,this.frLson,l).then(result=>{
        console.log("apply new result=" + result);
        this.procAplyMkupResult(result);
      });
    }else{

      if(this.frLson){
        let stdLsonId:string = "";
        for(let s of this.frLson.students){
          if(s.id == this.authService.user.id){
            stdLsonId = s.stdLsonId;
          }
        }

        if(stdLsonId){
          this.lessonService.aplyExtMkup(this.authService.user.id,stdLsonId,this.frLson,l).then(result=>{
            console.log("apply exist result=" + result);
            this.procAplyMkupResult(result);
          });
        }
      }

    }
  }

  private procAplyMkupResult(result:boolean):void{
    if(result){
      this.titleBar.msgBox.sendSuccessMsg("轉堂成功");
      this.reloadLson();
    }else{
      this.titleBar.msgBox.sendAlertMsg("轉堂失敗");
    }
    jQuery('#makeupLessonReveal').foundation('close');
  }

  private lsonToLsonDay(lsons:Lesson[]){
    let map: Map<string,LessonOfDay> = new Map();
    for(var l of lsons){
      var tempDate:Date = new Date(l.startDateTime);
      var date:Date = new Date(tempDate.getFullYear(),tempDate.getMonth(), tempDate.getDate());
      //console.log(date.toLocaleString());
      //console.log(l);
      //console.log(l.room.name);
      if(map.has(date.getTime().toString())){
        //console.log("contains");
        let lod:LessonOfDay = map.get(date.getTime().toString());
        //console.log(lod);
        lod.lessons.push(l);
      }else{
        //console.log("not contains");
        let lod = new LessonOfDay;
        lod.date = date;
        lod.dayOfWeek = this.dayToDayStr(date.getDay());
        lod.lessons = new Array<Lesson>();
        lod.lessons.push(l);
        map.set(date.getTime().toString(),lod);
      }
    }

    this.timetable.lessonOfDays = [];
    for(var v of Array.from(map.values())){
      this.timetable.lessonOfDays.push(v);
    }

  }

  ngAfterViewInit(){
    jQuery('#makeupLessonReveal').foundation();
    // jQuery('#rewardReveal').foundation();
    // jQuery('#redeemReveal').foundation();
  }

  private dayToDayStr(day:number):string{
    switch(day){
      case 0:
        return "星期日";
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      case 6:
        return "星期六";
    }
  }
}
