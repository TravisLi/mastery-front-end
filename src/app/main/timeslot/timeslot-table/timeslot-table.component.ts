import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, TimeslotTableMode} from '../timeslot-item';
import { WeekDay } from '../../../enum/enum';
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
  weekDays:WeekDay[] = [];

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
        console.log("week mode")

        this.weekDays = [];
        this.weekDays.push(WeekDay.None);
        this.weekDays.push(WeekDay.Sun);
        this.weekDays.push(WeekDay.Mon);
        this.weekDays.push(WeekDay.Tue);
        this.weekDays.push(WeekDay.Wed);
        this.weekDays.push(WeekDay.Thu);
        this.weekDays.push(WeekDay.Fri);
        this.weekDays.push(WeekDay.Sat);

        break;
      }

      case TimeslotTableMode.Day:{

        this.weekDays = [];
        if(!this.displayDay){
          throw new Error("No displayDay");
        }

        this.weekDays.push(WeekDay.None);
        this.weekDays.push(Util.getWeekDay(this.displayDay));

        firstItem = new TimeslotItem(WeekDay.None,0,0,Util.formatStdDate(this.displayDay));
        break;
      }
    }

    this.timeslotItemss = [];
    let rowPerHr = 60 / this.minPerRow;
    //console.log("rowPerHr=" + rowPerHr);
    let rowReq:number = (this.toHr-this.fromHr)*rowPerHr;
    //console.log("rowReq=" + rowReq);
    let runningHr:number = this.fromHr;
    for(let rowNo:number=-1;rowNo<=rowReq;rowNo++){
      let columns:TimeslotItem[] = [];
      //for(let columnNo:number=WeekDay.None;columnNo<=this.weekDays.length;columnNo++){
      for(let idx=0;idx<this.weekDays.length;idx++){
        //first row holding week da
        let day:WeekDay = this.weekDays[idx];
        //console.log("day="+day);

        let hrRow = rowNo % rowPerHr;
        //console.log("hrRow="+hrRow);
        let runningMin = hrRow * this.minPerRow;
        //console.log("runningHr="+runningHr);

        if(rowNo==-1){
          if(day==WeekDay.None){
            columns.push(firstItem);
          }else{
            columns.push(new TimeslotItem(WeekDay.None,0,0,WeekDay[day]));
          }
        }else{
          //first column
          if(day==WeekDay.None){
            columns.push(new TimeslotItem(WeekDay.None,0,0,`${runningHr}:${runningMin==0?runningMin.toString()+'0':runningMin}`));
          }else{
            columns.push(new TimeslotItem(day,runningHr,runningMin));
          }
        }

        //increase hr if it is last column of the hour
        if(idx==this.weekDays.length-1&&hrRow == rowPerHr-1){
            runningHr++;
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
