import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TimeslotItem, WeekDay } from '../timeslot-item';
import { TitleBarComponent } from '../../title-bar/title-bar.component';

@Component({
  selector: 'timeslot-input',
  templateUrl: './timeslot-input.component.html',
})
export class TimeslotInputComponent implements OnInit {

  private static readonly TS_ITEM:string = "ts-item";
  private static readonly TS_ITEM_SEL:string = "ts-item-selected";

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  timeslotItemss:TimeslotItem[][] = [];
  @Input()fromMonth:number=8;
  @Input()toMonth:number=9;
  @Input()fromHr:number=8;
  @Input()toHr:number=23;
  @Input()minPerRow:number=30;
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
    this.timeslotItemss = [];
    let rowPerHr = 60 / this.minPerRow;
    console.log("rowPerHr=" + rowPerHr);
    let rowReq:number = (this.toHr-this.fromHr)*rowPerHr;
    console.log("rowReq=" + rowReq);
    let runningHr:number = this.fromHr;
    for(let rowNo:number=-1;rowNo<=rowReq;rowNo++){
      let columns:TimeslotItem[] = [];
      for(let columnNo:number=WeekDay.None;columnNo<=WeekDay.Sat;columnNo++){
        //first row holding week day
        if(rowNo==-1){
          if(columnNo==0){
            columns.push(new TimeslotItem(WeekDay.None,0,0));
          }else{
            columns.push(new TimeslotItem(WeekDay.None,0,0,WeekDay[columnNo]));
          }
        }else{
          //first column
          let hrRow = rowNo % rowPerHr;
          let runningMin = hrRow * this.minPerRow;
          if(columnNo==0){
            columns.push(new TimeslotItem(columnNo,0,0,`${runningHr}:${runningMin==0?runningMin.toString()+'0':runningMin}`));
            if(hrRow == rowPerHr-1){
                runningHr++;
            }
          }else{
            columns.push(new TimeslotItem(columnNo,runningHr,runningMin));
          }
        }
      }
      //console.log(columns);
      this.timeslotItemss.push(columns);
    }
    //console.log(this.base);
  }

  ngOnInit(): void {
    this.titleBar.title = "當值時間";
    this.drawTable();
  }

  save():void{

  }

  toggleItem(e:Element,item:TimeslotItem){
    if(this.highlight){
      if(e.classList.contains(TimeslotInputComponent.TS_ITEM)){
        e.classList.remove(TimeslotInputComponent.TS_ITEM);
        e.classList.add(TimeslotInputComponent.TS_ITEM_SEL);
        item.selected = true;
      }else{
        if(e.classList.contains(TimeslotInputComponent.TS_ITEM_SEL)){
          e.classList.remove(TimeslotInputComponent.TS_ITEM_SEL);
          e.classList.add(TimeslotInputComponent.TS_ITEM);
          item.selected=false;
        }
      }
      console.log(item);
    }
  }
}
