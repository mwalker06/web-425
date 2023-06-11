/**
 * Title: app.routing.ts
 * Author: Megan Walker
 * Date: 06/11/2023
 * Description: Routing for the application
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// Import statements
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
