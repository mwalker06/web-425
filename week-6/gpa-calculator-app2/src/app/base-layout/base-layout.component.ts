/* Title: base-layout.component
Author: Megan Walker
Date: 07-02-2023
Description: base-layout.component file for the application
Source: Provided by Professor Krasso, Web 425 exercises
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
