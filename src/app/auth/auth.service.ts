import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';
import { RoleType } from '../role/role';
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

  hasStudentRight():boolean{
    if(this.user){
        return (this.user.role.type == RoleType[RoleType.student])
    }
    return false;
  }

  hasTeacherRight():boolean{
    if(this.user){
        return (this.user.role.type == RoleType[RoleType.teacher] || this.user.role.type == RoleType[RoleType.admin])
    }
    return false;
  }

  hasAdminRight():boolean{
    if(this.user){
        return this.user.role.type == RoleType[RoleType.admin]
    }
    return false;
  }

  logout(): void {
    this.user = null;
    this.isLoggedIn = false;
  }
}
