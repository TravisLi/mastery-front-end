import { Component, OnInit, ViewChild } from '@angular/core';
import { Timetable } from './timetable';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { LessonComponent } from './lesson/lesson.component';
import { AuthService } from '../../auth/auth.service';
import { TimetableService } from './timetable.service';


@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  providers: [TimetableService]
})
export class TimetableComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  timetable: Timetable;

  constructor(private authService:AuthService, private timetableService: TimetableService){
    this.timetable = new Timetable();
  };

  ngOnInit(): void {
    this.titleBar.title = "時間表";
    this.timetableService.getTimetable()
    .then(timetable=>{
      this.timetable=timetable[0];
    });
  }
}
