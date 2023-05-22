import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'Harry Potter & The Sorcerers Stone',
      authors: ['J.K. Rowling'],
      isbn: '123-456-789',
    },
    {
      id: 2,
      name: 'Harry Potter & The Chamber of Secrets',
      authors: ['J.K. Rowling'],
      isbn: '456-123-789',
    },
    {
      id: 3,
      name: 'Harry Potter & The Prisoner of Azkaban',
      authors: ['J.K. Rowling'],
      isbn: '789-123-456',
    },
    {
      id: 4,
      name: 'Harry Potter & The Goblet of Fire',
      authors: ['J.K. Rowling'],
      isbn: '321-654-987',
    },
  ];

  getBooks = (): Book[] => {
    return this.books;
  };

  constructor() {}
}
