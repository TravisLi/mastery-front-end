import { WeekDay } from '../../enum/enum';

export enum TimeslotTableMode{
  Week,
  Day
}

export class TimeslotItem{

  weekDay: WeekDay;
  hour: number;
  minute:number;
  selected:boolean;
  displayText:string;

  constructor(weekDay:WeekDay,hour:number,minute:number,displayText?:string){
    this.weekDay = weekDay;
    this.hour = hour;
    this.minute = minute;
    if(displayText){
      this.displayText = displayText;
    }else{
      this.displayText = '';
    }
    this.selected = false;
  }
}
