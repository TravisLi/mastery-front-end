import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  protected authService: AuthService;
  protected router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService=authService;
    this.router = router;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/login']);

    return false;
  }
}
