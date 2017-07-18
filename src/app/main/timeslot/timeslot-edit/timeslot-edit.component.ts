import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, TimeslotTableMode } from '../timeslot-item';
import { WeekDay } from '../../../enum/enum';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { TimeslotTableComponent } from '../timeslot-table/timeslot-table.component';
import { MdDatepicker, MdInputContainer } from '@angular/material';

@Component({
  selector: 'timeslot-edit',
  templateUrl: './timeslot-edit.component.html',
})
export class TimeslotEditComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  @ViewChild(TimeslotTableComponent)
  timeslotTable:TimeslotTableComponent

  selectedDate:Date;

  constructor(){
  };

  ngOnInit(): void {
    this.titleBar.title = "當值時間";
  }

  dateChanged(e):void{
    console.log(e);
    this.selectedDate = e;
    this.timeslotTable.tableMode = TimeslotTableMode.Day;
    this.timeslotTable.displayDay = this.selectedDate;
    this.timeslotTable.fromHr = 8;
    this.timeslotTable.toHr=23;
    this.timeslotTable.minPerRow=30;
    this.timeslotTable.drawTable();
  }

  save():void{

  }

}
