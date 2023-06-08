/**
 * Title: app.component.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: App component
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// Import statement for Component
import { Component } from '@angular/core';

// Component details (selector, templateUrl, styleUrls)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Export class
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
