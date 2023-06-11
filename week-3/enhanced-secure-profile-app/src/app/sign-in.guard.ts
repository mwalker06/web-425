/**
 * Title: sign-in.guard.ts
 * Author: Megan Walker
 * Date: 06/11/2023
 * Description: Sign-in guard for the application
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) { }

  // canActivate(): boolean {
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = next.queryParams.isLoggedIn;
    if (isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
