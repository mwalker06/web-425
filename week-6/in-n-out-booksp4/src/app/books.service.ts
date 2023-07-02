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
        isbn: '978-1-56619-909-4',
        title: 'Pride and Prejudice',
        description: 'Pride and Prejudice is a classic romantic novel written by Jane Austen and published in 1813. Set in the 19th century, it explores the themes of love, marriage, and social status through the captivating story of Elizabeth Bennet and Mr. Darcy.',
        numOfPages: 279,
        authors: ['Jane Austen']
      },
      {
        isbn: '978-1-56619-910-0',
        title: 'Wuthering Heights',
        description: 'Wuthering Heights is a haunting and passionate novel by Emily Brontë. Published in 1847 under her pseudonym "Ellis Bell," it tells the turbulent tale of the love and vendetta between Catherine Earnshaw and Heathcliff, set against the backdrop of the atmospheric moors of Yorkshire.',
        numOfPages: 357,
        authors: ['Emily Brontë']
      },
      {
        isbn: '978-1-56619-911-7',
        title: 'The Catcher in the Rye',
        description: 'The Catcher in the Rye is a highly influential coming-of-age story by J. D. Salinger. Originally published in serial form between 1945 and 1946, and later as a novel in 1951, it presents the introspective journey of Holden Caulfield, a disenchanted teenager navigating the complexities of adulthood and society.',
        numOfPages: 234,
        authors: ['J. D. Salinger']
      },
      {
        isbn: '978-1-56619-912-4',
        title: 'The Grapes of Wrath',
        description: 'The Grapes of Wrath is a powerful American realist novel written by John Steinbeck and published in 1939. Set during the Great Depression, it follows the Joad family as they face hardship, displacement, and injustice while seeking a better life in California, providing a poignant portrayal of resilience and social injustice.',
        numOfPages: 464,
        authors: ['John Steinbeck']
      },
      {
        isbn: '978-1-56619-913-1',
        title: 'Far from the Madding Crowd',
        description: "Far from the Madding Crowd, published in 1874, is Thomas Hardy's acclaimed fourth novel and a significant achievement in his literary career. Set in rural England, it tells the story of Bathsheba Everdene and her relationships with three very different suitors, exploring themes of love, independence, and societal expectations.",
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
