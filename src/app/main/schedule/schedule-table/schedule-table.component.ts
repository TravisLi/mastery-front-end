import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ScheduleItem, WeekDay } from './schedule-item';

@Component({
  selector: 'schedule-table',
  templateUrl: './schedule-table.component.html',
})
export class ScheduleTableComponent implements OnInit {

  private static readonly SCH_ITEM:string = "sch-item";
  private static readonly SCH_ITEM_SEL:string = "sch-item-selected";

  scheduleItemss:ScheduleItem[][] = [];
  @Input()fromHr:number;
  @Input()toHr:number;
  @Input()minPerRow:number;
  highlight:boolean = false;
  weekDays:string[] = [];

  constructor(){

    for(let wd in WeekDay){
      this.weekDays.push(WeekDay[wd]);
    }

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

  drawTable():void{
    let rowPerHr = 60 / this.minPerRow;
    let rowReq:number = ((this.toHr-1)-this.fromHr)*rowPerHr;
    //console.log(rowReq);
    let runningHr:number = this.fromHr;
    for(let rowNo:number=-1;rowNo<=rowReq;rowNo++){
      let columns:ScheduleItem[] = [];
      for(let columnNo:number=WeekDay.None;columnNo<=WeekDay.Sat;columnNo++){
        //first row holding week day
        if(rowNo==-1){
          if(columnNo==0){
            columns.push(new ScheduleItem(WeekDay.None,0,0));
          }else{
            columns.push(new ScheduleItem(WeekDay.None,0,0,WeekDay[columnNo]));
          }
        }else{
          //first column
          let hrRow = rowNo % rowPerHr;
          let runningMin = hrRow * this.minPerRow;
          if(columnNo==0){
            columns.push(new ScheduleItem(columnNo,0,0,`${runningHr}:${runningMin==0?runningMin.toString()+'0':runningMin}`));
            if(hrRow == rowPerHr-1){
                runningHr++;
            }
          }else{
            columns.push(new ScheduleItem(columnNo,runningHr,runningMin));
          }
        }
      }
      //console.log(columns);
      this.scheduleItemss.push(columns);
    }
    //console.log(this.base);
  }

  ngOnInit(): void {

  }

  toggleItem(e:Element,item:ScheduleItem){
    if(this.highlight){
      if(e.classList.contains(ScheduleTableComponent.SCH_ITEM)){
        e.classList.remove(ScheduleTableComponent.SCH_ITEM);
        e.classList.add(ScheduleTableComponent.SCH_ITEM_SEL);
        item.selected = true;
      }else{
        if(e.classList.contains(ScheduleTableComponent.SCH_ITEM_SEL)){
          e.classList.remove(ScheduleTableComponent.SCH_ITEM_SEL);
          e.classList.add(ScheduleTableComponent.SCH_ITEM);
          item.selected=false;
        }
      }
      console.log(item);
    }
  }
}
