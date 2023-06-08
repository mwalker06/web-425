/**
 * Title: app.module.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: App module for the application
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// Import statements
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

// NgModule decorator
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// Export class AppModule
export class AppModule { }
