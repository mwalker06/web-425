/* Title: not-found.component
Author: Megan Walker
Date: 07-02-2023
Description: not-found.component file for the application
Source: Provided by Professor Krasso, Web 425 exercises */

import { not } from '@angular/compiler/src/output/output_ast'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
