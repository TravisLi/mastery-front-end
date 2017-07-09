import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, WeekDay } from '../timeslot-item';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { MdDatepicker, MdInputContainer } from '@angular/material';

@Component({
  selector: 'timeslot-edit',
  templateUrl: './timeslot-edit.component.html',
})
export class TimeslotEditComponent implements OnInit {

  private static readonly TS_ITEM:string = "ts-item";
  private static readonly TS_ITEM_SEL:string = "ts-item-selected";

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  constructor(){
  };

  ngOnInit(): void {
    this.titleBar.title = "當值時間";
  }

}
