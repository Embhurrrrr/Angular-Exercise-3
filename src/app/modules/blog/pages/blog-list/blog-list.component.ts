import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  constructor(private blogService: BlogService) {}

  id: number = 0;

  getBlogs = () => {
    return this.blogService.getBlogs();
  };

  getID = (id: number) => {
    this.id = id;
  };
}
