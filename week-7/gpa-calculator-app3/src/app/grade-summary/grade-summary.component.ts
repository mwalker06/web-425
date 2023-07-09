/* Title: grade-summary.component
Author: Megan Walker
Date: 07-02-2023
Description: Grade summary component file for the application
Source: Provided by Professor Krasso, Web 425 exercises */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
