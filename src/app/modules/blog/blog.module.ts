import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { MatCardModule } from '@angular/material/card';
import { BlogRoutingModule } from './blog-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BlogItemComponent, BlogListComponent],
  imports: [BlogRoutingModule, CommonModule, MatCardModule, MatButtonModule],
})
export class BlogModule {}
