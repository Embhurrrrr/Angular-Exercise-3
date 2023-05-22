import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BookItemComponent, BookListComponent],
  imports: [
    BookRoutingModule,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class BookModule {}
