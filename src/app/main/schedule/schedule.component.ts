import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

@Component({
  selector: 'schdule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  @ViewChild(ScheduleTableComponent)
  scheduleTable:ScheduleTableComponent;

  @Input()fromHr:number = 8;
  @Input()toHr:number = 23;
  @Input()minPerRow:number = 30;

  constructor(){

  };

  ngOnInit(): void {
    this.titleBar.title = "時間表";
  }

  update():void{
    this.scheduleTable.drawTable();
  }

}
