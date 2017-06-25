import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { SysMsgType, SystemMessage } from './system-message';
import { Observable }    from 'rxjs/Observable';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
})

export class TitleBarComponent {
  title:string;
  confirmMsg:string;
  sysMsg:SystemMessage;
  SysMsgType = SysMsgType;
  accept:boolean;
  cancel:boolean;

  constructor(public authService: AuthService) {

  }

  openConfirmationBox(msg:string):void{
    console.log("open");
    this.confirmMsg = msg;
  }

  confirmClick():void{
    this.accept = true;
  }

  cancelClick():void{
    this.cancel = false;
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

  logout(){
    this.authService.logout();
  }
}
