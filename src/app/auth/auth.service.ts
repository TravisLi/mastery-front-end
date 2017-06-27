import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  user:User;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router, private userService: UserService) {

  };

  private handleError(error: any): void {
    console.error('An error occurred', error); // for demo purposes only
  }

  // login(): Observable<boolean> {
  //   return Observable.of(false).delay(1000).do(
  //     (val) => {
  //       console.log('value='+val);
  //       this.isLoggedIn = true
  //     });
  // }

  login(username:string,pwd:string): Promise<Boolean> {
    return this.userService.getUserByUsername(username)
    .then(user => {
      if(user.pwd===pwd){
        this.user = user;
        this.isLoggedIn = true;
        return true;
      }else{
        return false;
      }
    })
  }

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => {
  //     this.user = new User();
  //     this.user.id = 1;
  //     this.user.username = "Angular";
  //     this.user.role = 'admin';
  //     this.isLoggedIn = true;
  //     if(this.redirectUrl){
  //       this.router.navigate([this.redirectUrl]);
  //     }
  //   });
  // }

  logout(): void {
    this.user = null;
    this.isLoggedIn = false;
  }
}
