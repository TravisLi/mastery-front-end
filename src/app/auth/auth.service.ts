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
  private updPwdUrl = environment.masteryRestUrl + '/user/updatepwd/';

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
  }

  changePwd(oldPwd:string,newPwd:string){
    console.log("changePwd");
    let parm:string = `/${this.user.id}/${oldPwd}/${newPwd}/`
    let reqUrl:string = this.updPwdUrl + parm;
    return this.http.get(reqUrl).toPromise().then(
      response => {
        if(response!=null){
          var result:boolean = response.json() as boolean;
          console.log(result);
          return result;
        }
      }
    ).catch(this.handleError);
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
