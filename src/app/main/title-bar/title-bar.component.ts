import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { SysMsgType, SystemMessage } from './system-message';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
})

export class TitleBarComponent {
  title:string;
  sysMsg:SystemMessage;
  SysMsgType = SysMsgType;

  constructor(public authService: AuthService) {
  }

  sendPriMsg(msg:string):void{
    this.sysMsg = new　SystemMessage(SysMsgType.Primary,msg);
  }

  sendSecMsg(msg:string):void{
    this.sysMsg = new　SystemMessage(SysMsgType.Secondary,msg);
  }

  sendSuccessMsg(msg:string):void{
    this.sysMsg = new　SystemMessage(SysMsgType.Success,msg);
  }

  sendWarningMsg(msg:string):void{
    this.sysMsg = new　SystemMessage(SysMsgType.Warning,msg);
  }

  sendAlterMsg(msg:string):void{
    this.sysMsg = new　SystemMessage(SysMsgType.Alert,msg);
  }

  clearMsg():void{
    this.sysMsg = null;
  }

  logout(){
    this.authService.logout();
  }
}
