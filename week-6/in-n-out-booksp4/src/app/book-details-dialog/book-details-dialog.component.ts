/* Title: book-details-dialog.component
Author: Megan Walker
Date: 06-25-2023
Description: book-details-dialog.component file for in-n-out-books app
Source: Provided by Professor Krasso, Web 425 exercises */

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  book: IBook;


  ngOnInit(): void {
  }

}
