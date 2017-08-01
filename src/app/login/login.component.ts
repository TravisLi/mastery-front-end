import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { Logger } from '../logger/logger';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private logger:Logger = Logger.getLogger(this.constructor.name);

  @ViewChild(MsgBoxComponent)
  msgBox:MsgBoxComponent;

  message: string;
  waiting: boolean;
  @Input()username: string;
  @Input()password: string;

  constructor(public authService: AuthService, public router: Router) {
    this.waiting = false;
    this.username = '';
    this.password = '';
  }

  ngOnInit(){
    this.msgBox.clearMsg();
  }

  login() {
    this.msgBox.sendPriMsg('登入中...');
    this.waiting = true;
    this.authService.login(this.username, this.password)
    .then(
      (value) => {
        console.log(value);
        this.waiting = false;
        if(value){
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main/timetable';
          this.logger.debug(redirect);
          this.router.navigate([redirect]);
        }else{
          this.msgBox.sendWarningMsg('密碼錯誤');
        }
      }
    )
    .catch((reject)=>{
      this.waiting = false;
      this.logger.error(reject);
      this.msgBox.sendAlertMsg('無此用戶');
    }

    )
    // this.authService.login().subscribe(() => {
    //   this.waiting = false;
    //   if (this.authService.isLoggedIn) {
    //     // Get the redirect URL from our auth service
    //     // If no redirect has been set, use the default
    //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main/news';
    //     // Redirect the user
    //     this.router.navigate([redirect]);
    //   }
    // });
  }


}
