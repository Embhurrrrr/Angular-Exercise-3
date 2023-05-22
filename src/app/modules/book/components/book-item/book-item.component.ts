import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input('bookInput') book: Book | undefined;

  @Output() actionEmitter: EventEmitter<number> = new EventEmitter<number>();

  sendActionEdit = (id: number) => {
    this.actionEmitter.emit(this.book?.id);
    console.log('Edit Book ID: ', id);
  };

  sendActionDelete = (id: number) => {
    this.actionEmitter.emit(this.book?.id);
    console.log('Delete Book ID: ', id);
  };
}
