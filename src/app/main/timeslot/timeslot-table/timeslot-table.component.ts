import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, TimeslotTableMode, WeekDay } from '../timeslot-item';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { Util } from '../../../util/util';

@Component({
  selector: 'timeslot-table',
  templateUrl: './timeslot-table.component.html',
})
export class TimeslotTableComponent {

  private static readonly TS_ITEM:string = "ts-item";
  private static readonly TS_ITEM_SEL:string = "ts-item-selected";

  timeslotItemss:TimeslotItem[][] = [];
  @Input()fromHr:number;
  @Input()toHr:number;
  @Input()minPerRow:number;
  @Input()tableMode:TimeslotTableMode;
  @Input()displayDay:Date;
  highlight:boolean = false;
  weekDays:string[] = [];

  constructor(){
  };

  handleDragEnter(e,item):void{
    console.log(e);
  }

  handleMouseDown(e,item):void{
    e.stopPropagation();
    e.preventDefault();
    this.highlight = true;
    this.toggleItem(e.srcElement,item);
  }

  handleMouseUp(e,item):void{
    this.highlight = false;
    this.toggleItem(e.srcElement,item);
  }

  handleMouseOver(e,item):void{
    this.toggleItem(e.srcElement,item);
  }

  updateMinPerRow(min:number):void{
    this.minPerRow=min;
    this.drawTable();
  }

  updateFromHr(hr:number){
    this.fromHr=hr;
    this.drawTable();
  }

  updateToHr(hr:number){
    this.toHr=hr;
    this.drawTable();
  }

  drawTable():void{

    let firstItem = new TimeslotItem(WeekDay.None,0,0);

    switch(this.tableMode){

      case TimeslotTableMode.Week:{
        for(let wd in WeekDay){
          this.weekDays.push(wd);
        }
        break;
      }

      case TimeslotTableMode.Day:{

        if(!this.displayDay){
          throw new Error("No displayDay");
        }

        let weekDay:number = this.displayDay.getDay() + 1;
        for(let wd in WeekDay){
          if(weekDay.toString()==wd){
            this.weekDays.push("0");
            this.weekDays.push(wd);
          }
        }

        firstItem = new TimeslotItem(WeekDay.None,0,0,Util.formatStdDate(this.displayDay));
        break;
      }
    }

    this.timeslotItemss = [];
    let rowPerHr = 60 / this.minPerRow;
    console.log("rowPerHr=" + rowPerHr);
    let rowReq:number = (this.toHr-this.fromHr)*rowPerHr;
    console.log("rowReq=" + rowReq);
    let runningHr:number = this.fromHr;
    for(let rowNo:number=-1;rowNo<=rowReq;rowNo++){
      let columns:TimeslotItem[] = [];
      //for(let columnNo:number=WeekDay.None;columnNo<=this.weekDays.length;columnNo++){
      for(let day in this.weekDays){
        //first row holding week day
        if(rowNo==-1){
          if(day==WeekDay[WeekDay.None]){
            columns.push(firstItem);
          }else{
            columns.push(new TimeslotItem(WeekDay.None,0,0,WeekDay[day]));
          }
        }else{
          //first column
          let hrRow = rowNo % rowPerHr;
          let runningMin = hrRow * this.minPerRow;
          if(day==WeekDay[WeekDay.None]){
            columns.push(new TimeslotItem(WeekDay[day],0,0,`${runningHr}:${runningMin==0?runningMin.toString()+'0':runningMin}`));
            if(hrRow == rowPerHr-1){
                runningHr++;
            }
          }else{
            columns.push(new TimeslotItem(day,runningHr,runningMin));
          }
        }
      }
      //console.log(columns);
      this.timeslotItemss.push(columns);
    }
    //console.log(this.base);
  }

  save():void{

  }

  toggleItem(e:Element,item:TimeslotItem){
    if(this.highlight){
      if(e.classList.contains(TimeslotTableComponent.TS_ITEM)){
        e.classList.remove(TimeslotTableComponent.TS_ITEM);
        e.classList.add(TimeslotTableComponent.TS_ITEM_SEL);
        item.selected = true;
      }else{
        if(e.classList.contains(TimeslotTableComponent.TS_ITEM_SEL)){
          e.classList.remove(TimeslotTableComponent.TS_ITEM_SEL);
          e.classList.add(TimeslotTableComponent.TS_ITEM);
          item.selected=false;
        }
      }
      console.log(item);
    }
  }
}
