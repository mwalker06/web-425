/**
* Title: my-image.component.ts
* Author: Megan Walker
* Date: 06/03/2023
* Description: My image component
* Source: Professor Krasso, Week 2 Web 425 - Basic Routing
*/

// Import statement
import { Component, OnInit } from '@angular/core';

// Component details (selector, templateUrl, styleUrls)
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
// Export class
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
