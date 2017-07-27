import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthGuard } from './auth-guard.service'
import { AuthService } from './auth.service';

@Injectable()
export class TeacherAuthGuard extends AuthGuard {

  constructor(authService: AuthService, router: Router) {
    super(authService,router);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkIsTeacher(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkIsTeacher(url: string): boolean {

    if(super.checkLogin(url)){
      if(this.authService.user.role == 'teacher'|| this.authService.user.role == 'admin'){
        return true;
      }
    }

    return false;
  }
}
