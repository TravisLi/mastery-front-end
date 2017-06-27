import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthGuard } from './auth-guard.service'
import { AuthService }      from './auth.service';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  constructor(authService: AuthService, router: Router) {
    super(authService, router);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkIsAdmin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkIsAdmin(url: string): boolean {

    if(super.checkLogin(url)){
      if(this.authService.user.role.type == 'admin'){
        return true;
      }
    }

    return false;
  }
}
