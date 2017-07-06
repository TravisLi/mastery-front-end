import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';


@Component({
  selector: 'schdule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  base:string[][] = [];
  fromHr:number = 8;
  toHr:number = 23;
  highlight:boolean = false;
  weekDays:string[] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  constructor(){
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
      let columns:string[] = [];
      for(let columnNo:number=0;columnNo<8;columnNo++){
        //first row holding week day
        if(rowNo==0){
          if(columnNo==0){
            columns.push('');
          }else{
            columns.push(this.weekDays[columnNo-1]);
          }
        }else{
          //first column
          if(columnNo==0){
            if(rowNo%2==0){
              columns.push(`${runningHr}:00`);
            }else{
              columns.push(`${runningHr}:30`);
              runningHr++;
            }
          }else{
            columns.push(' ');
          }
        }
      }
      //console.log(columns);
      this.base.push(columns);
    }
    //console.log(this.base);
  }
}
