/* Title: gpa.component
Author: Megan Walker
Date: 07-02-2023
Description: gpa.component file for the application
Source: Provided by Professor Krasso, Web 425 exercises */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
