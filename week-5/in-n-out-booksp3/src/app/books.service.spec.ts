/* Title: books.service.spec
Author: Megan Walker
Date: 06-25-2023
Description: books.service.spec file for in-n-out-books app
Source: Provided by Professor Krasso, Web 425 exercises */

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
