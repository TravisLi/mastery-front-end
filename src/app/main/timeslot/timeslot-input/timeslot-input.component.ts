import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, TimeslotTableMode} from '../timeslot-item';
import { WeekDay } from '../../../enum/enum';
import { TimeslotTableComponent } from '../timeslot-table/timeslot-table.component';
import { TitleBarComponent } from '../../title-bar/title-bar.component';

@Component({
  selector: 'timeslot-input',
  templateUrl: './timeslot-input.component.html',
})
export class TimeslotInputComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  @ViewChild(TimeslotTableComponent)
  timeslotTable:TimeslotTableComponent

  TimeslotTableMode = TimeslotTableMode;

  @Input()fromMonth:number=8;
  @Input()toMonth:number=9;

  constructor(){

  };

  ngOnInit(): void {
    this.titleBar.title = "當值時間";
    this.timeslotTable.tableMode = TimeslotTableMode.Week;
    this.timeslotTable.minPerRow = 30;
    this.timeslotTable.fromHr = 8;
    this.timeslotTable.toHr = 23;
    this.timeslotTable.drawTable();
  }

  save():void{

  }

}
