/** Title: composer-app
* Author: Megan Walker
* Date: 06/03/2023
* Description: App component
* Source: Professor Krasso, Week 2 Web 425 exercises
*/

// import statements
import { Component } from '@angular/core';

// component details
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export the class
export class AppComponent {
  title = 'enhanced-composer-app';
}
