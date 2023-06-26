/* Title: book.interface
Author: Megan Walker
Date: 06-25-2023
Description: book.interface file for in-n-out-books app
Source: Provided by Professor Krasso, Web 425 exercises */

export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}
