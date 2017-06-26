import { Component, Input } from '@angular/core';
import { SysMsgType, SystemMessage } from './system-message';

@Component({
  selector: 'msg-box',
  templateUrl: './msg-box.component.html',
})

export class MsgBoxComponent {
  sysMsg:SystemMessage;
  SysMsgType = SysMsgType;

  constructor() {

  }

  sendLoadingMsg():void{
    this.sendPriMsg('資料傳送中');
  }

  sendPriMsg(msg:string):void{
    this.sysMsg = new SystemMessage(SysMsgType.Primary,msg);
  }

  sendSecMsg(msg:string):void{
    this.sysMsg = new SystemMessage(SysMsgType.Secondary,msg);
  }

  sendSuccessMsg(msg:string):void{
    this.sysMsg = new SystemMessage(SysMsgType.Success,msg);
  }

  sendWarningMsg(msg:string):void{
    this.sysMsg = new SystemMessage(SysMsgType.Warning,msg);
  }

  sendAlterMsg(msg:string):void{
    this.sysMsg = new SystemMessage(SysMsgType.Alert,msg);
  }

  clearMsg():void{
    this.sysMsg = null;
  }

}
