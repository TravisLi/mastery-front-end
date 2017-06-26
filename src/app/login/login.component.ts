import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  message: string;
  waiting: boolean;
  @Input()username: string;
  @Input()password: string;

  constructor(public authService: AuthService, public router: Router) {
    this.clearMessage();
    this.waiting = false;
    this.username = null;
    this.password = null;
  }

  clearMessage() {
    this.message = null;
  }

  login() {
    this.message = '登入中...';
    this.waiting = true;
    this.authService.login(this.username, this.password).then(
      value => {
        this.waiting = false;
        if(value){
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main/news';
          console.log(redirect);
          this.router.navigate([redirect]);
        }else{
          this.message = 'error';
        }
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
