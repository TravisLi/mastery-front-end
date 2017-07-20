import { Component, OnInit, ViewChild } from '@angular/core';
import { Timetable } from './timetable';
import { Lesson } from '../../lesson/lesson';
import { LessonOfDay } from './lesson-of-day';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { LessonComponent } from './lesson/lesson.component';
import { AuthService } from '../../auth/auth.service';
import { LessonService } from '../../lesson/lesson.service';


@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  providers: [LessonService]
})
export class TimetableComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  timetable: Timetable;
  week:number

  constructor(private authService:AuthService, private lessonService: LessonService){
    this.timetable = new Timetable();
  };

  ngOnInit(): void {
    this.titleBar.title = "時間表";
    this.week = 1;
    this.timetable.lessonOfDays = [];
    //console.log(this.timetable);
    this.lessonService.getWeeklyLsonByStd(this.authService.user.name,this.week)
    .then(lessons=>{
      this.lsonToLsonDay(lessons);
    });
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

    for(var v of Array.from(map.values())){
      this.timetable.lessonOfDays.push(v);
    }

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
