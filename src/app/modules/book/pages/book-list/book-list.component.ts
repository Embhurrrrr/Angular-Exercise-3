import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  constructor(private bookService: BookService) {}

  id: number = 0;
  getBooks = () => {
    return this.bookService.getBooks();
  };

  getID = (id: number) => {
    this.id = id;
  };
}
