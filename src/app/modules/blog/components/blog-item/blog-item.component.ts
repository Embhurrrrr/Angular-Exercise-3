import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;

  @Output() actionEmitter: EventEmitter<number> = new EventEmitter<number>();

  sendActionEdit = (id: number) => {
    this.actionEmitter.emit(this.blog?.id);
    console.log('Edit Blog ID: ', id);
  };

  sendActionDelete = (id: number) => {
    this.actionEmitter.emit(this.blog?.id);
    console.log('Delete Blog ID: ', id);
  };
}
