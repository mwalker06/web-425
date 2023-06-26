/* Title: books.service
Author: Megan Walker
Date: 06-25-2023
Description: books.service file for in-n-out-books app
Source: Provided by Professor Krasso, Web 425 exercises */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;


  constructor() {

    this.books = [
      {
        isbn: '978-0141439518',
        title: 'Pride and Prejudice',
        description: 'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813.',
        numOfPages: 279,
        authors: ['Jane Austen']
      },
      {
        isbn: '978-0141439556',
        title: 'Wuthering Heights',
        description: 'Wuthering Heights is a novel by Emily Brontë published in 1847 under her pseudonym "Ellis Bell".',
        numOfPages: 357,
        authors: ['Emily Brontë']
      },
      {
        isbn: '978-0316769488',
        title: 'The Catcher in the Rye',
        description: 'The Catcher in the Rye is a story by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951.',
        numOfPages: 234,
        authors: ['J. D. Salinger']
      },
      {
        isbn: '978-0143039433',
        title: 'The Grapes of Wrath',
        description: 'The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939.',
        numOfPages: 464,
        authors: ['John Steinbeck']
      },
      {
        isbn: '978-0141439655',
        title: 'Far from the Madding Crowd',
        description: "Far from the Madding Crowd (1874) is Thomas Hardy's fourth novel and his first major literary success.",
        numOfPages: 433,
        authors: ['Thomas Hardy']
      }
    ]
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }

}
