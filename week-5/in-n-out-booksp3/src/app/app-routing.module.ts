/**
 * Title: app-routing.module.ts
 * Author: Megan Walker
 * Date: 06/25/2023
 * description: app-routing.module.ts file for in-n-out-books app
 * Source: Provided by Professor Krasso, Web 425 exercises
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path:"book-list",
    component:BookListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
