import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user:User;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router) {

  };

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      this.user = new User();
      this.user.id = 1;
      this.user.username = "Angular";
      this.user.role = 'admin';
      this.isLoggedIn = true;
      if(this.redirectUrl){
        this.router.navigate([this.redirectUrl]);
      }
    });
  }

  logout(): void {
    this.user = null;
    this.isLoggedIn = false;
  }
}
