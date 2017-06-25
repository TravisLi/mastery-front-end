import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

export class Logger{

  private static isDebug:boolean = environment.production;

  constructor(private className:string){
  };

  public static getLogger(className:string):Logger{
    return new Logger(className);
  }

  debug(msg: string):void {
    if(Logger.isDebug){
      console.log(this.genTemplate(msg),"DEBUG");
    }
  }

  info(msg: string):void {
      console.log(this.genTemplate(msg),"INFO");
  }

  warn(msg: string):void {
      console.warn(this.genTemplate(msg),"WARN");
  }

  error(msg: string):void {
      console.error(this.genTemplate(msg),"ERROR");
  }

  private genTemplate(msg:string):string{
    return Logger.getTS() + ' ' + this.className + ' ' + '%s' + ' ' + msg;
  }

  private static getTS():string{
    // Create a date object with the current time
    let now = new Date();

    // Create an array with the current month, day and time
    let date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

    // Create an array with the current hour, minute and second
    let time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

    // Determine AM or PM suffix based on the hour
    let suffix = ( time[0] < 12 ) ? "AM" : "PM";

    // Convert hour from military time
    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
    time[0] = time[0] || 12;

    let timeStr = [];

    // If seconds and minutes are less than 10, add a zero
    for ( var i = 0; i < 3; i++ ) {
      if ( time[i] < 10 ) {
        timeStr.push('0'+time[i].toString());
      }else{
        timeStr.push(time[i]);
      }
    }

    // Return the formatted string
    return '['+date.join('/') + ' ' + timeStr.join(':') + ' ' + suffix +']';
  }
}
