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
    this.lessonService.getWeeklyLsonByStd(this.authService.user.name,this.week)
    .then(lessons=>{
      this.lsonToLsonDay(lessons);
    });
  }

  private lsonToLsonDay(lsons:Lesson[]){
    let map: Map<Date,LessonOfDay> = new Map();
    for(var l of lsons){
      var date:Date = new Date(l.startDateTime.getDate());
      if(map.has(date)){
        map.get(date).lessons.push(l);
      }else{
        let lod = new LessonOfDay;
        lod.date = date.toString();
        lod.dayOfWeek = this.dayToDayStr(date.getDay());
        lod.lessons = new Array<Lesson>();
        lod.lessons.push(l);
      }
    }

    map.forEach(function(v,k){
      this.timetable.lessonOfDays.push(v);
    })

  }

  private dayToDayStr(day:number):string{
    switch(day){
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thur";
      case 5:
        return "Friday";
      case 6:
        return "Sat";
    }
  }
}
