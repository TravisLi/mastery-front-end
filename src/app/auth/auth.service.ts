import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import { Auth } from './auth';
import { User } from '../user/user';
import { RoleType } from '../role/role';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user:User;
  isLoggedIn: boolean = false;
  redirectUrl: string;
  private loginUrl = environment.masteryRestUrl + '/login';

  constructor(private router: Router, private http:Http) {

  };

  private handleError(error: any): void {
    console.error('An error occurred', error); // for demo purposes only
  }

  login(username:string,pwd:string): Promise<boolean> {
    let auth:Auth = new Auth();
    auth.username=username;
    auth.pwd=pwd
    return this.http.post(this.loginUrl,auth).toPromise().then(
      response => {
        if(response!=null){
          this.user = response.json() as User;
          this.isLoggedIn = true;
          return true;
        }
      }
    ).catch(this.handleError);

    // return this.userService.getUserByUsername(username)
    // .then(user => {
    //   if(user.pwd===pwd){
    //     this.user = user;
    //     this.isLoggedIn = true;
    //     return true;
    //   }else{
    //     return false;
    //   }
    // })
  }

  hasStudentRight():boolean{
    if(this.user){
        return (this.user.role == 'student')
    }
    return false;
  }

  hasTeacherRight():boolean{
    if(this.user){
        return (this.user.role == 'teacher' || this.user.role =='admin')
    }
    return false;
  }

  hasAdminRight():boolean{
    if(this.user){
        return this.user.role == 'admin'
    }
    return false;
  }

  logout(): void {
    this.user = null;
    this.isLoggedIn = false;
    this.router.navigate(['./login']);
  }
}
