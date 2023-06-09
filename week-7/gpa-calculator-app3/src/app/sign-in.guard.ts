/* Title: sign-in.guard
Author: Megan Walker
Date: 07-09-2023
Description: sign-in.guard file for the application
Source: Provided by Professor Krasso, Web 425 exercises */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
