/**
 * Title: app-routing.module.ts
 * Author: Megan Walker
 * Date: 06/3/2023
 * @description: This file is used to define the routes for the application.
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

// import statements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// routes array with path and component
const routes: Routes = [
  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent }
];

// export the routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export the class
export class AppRoutingModule { }
