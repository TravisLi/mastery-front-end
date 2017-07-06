import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { ScheduleItem, WeekDay } from './schedule-item';

@Component({
  selector: 'schdule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  scheduleItemss:ScheduleItem[][] = [];
  fromHr:number = 8;
  toHr:number = 23;
  highlight:boolean = false;
  weekDays:string[];

  constructor(){

    for(let wd in WeekDay){
      this.weekDays.push(WeekDay[wd]);
    }

  };

  handleDragEnter(e):void{
    console.log(e);
  }

  handleMouseDown(e):void{
    this.highlight = true;
  }

  handleMouseUp(e):void{
    this.highlight = false;
  }

  handleMouseOver(e):void{
    if(this.highlight){
      let srcDom = e.srcElement;
      console.log(srcDom);
      if(srcDom.className.includes('sch-item')){
        srcDom.classList.add('sch-item-selected');
      }
    }
  }

  ngOnInit(): void {
    this.titleBar.title = "時間表";
    let rowReq:number = (this.toHr-this.fromHr)*2;
    //console.log(rowReq);
    let runningHr:number = this.fromHr;
    for(let rowNo:number=0;rowNo<rowReq;rowNo++){
      let columns:ScheduleItem[] = [];
      for(let columnNo:number=WeekDay.None;columnNo<=WeekDay.Sat;columnNo++){
        //first row holding week day
        if(rowNo==0){
          if(columnNo==0){
            columns.push(new ScheduleItem(WeekDay.None,0,0));
          }else{
            columns.push(new ScheduleItem(WeekDay.None,0,0,WeekDay[columnNo]));
          }
        }else{
          //first column
          if(columnNo==0){
            if(rowNo%2==0){
              columns.push(new ScheduleItem(WeekDay.None,0,0,`${runningHr}:00`));
            }else{
              columns.push(new ScheduleItem(WeekDay.None,0,0,`${runningHr}:30`));
              runningHr++;
            }
          }else{
            columns.push(new ScheduleItem(WeekDay.None,0,0,`${runningHr}:30`));
          }
        }
      }
      //console.log(columns);
      this.scheduleItemss.push(columns);
    }
    //console.log(this.base);
  }
}
