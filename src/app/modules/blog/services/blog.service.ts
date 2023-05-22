import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description:
        'Learn the basics of Angular, a popular JavaScript framework for building web applications. This blog entry covers key concepts such as components, templates, data binding, and routing.',
      author: 'Jimmy Butler',
      comments: [
        'Comment 1: Great overview of Angular! Looking forward to diving deeper into the framework.',
        'Comment 2: This blog post was very helpful in understanding the core concepts of Angular. Thanks for sharing!',
      ],
    },
    {
      id: 2,
      title: 'The Benefits of Meditation',
      description:
        'Discover the numerous benefits of meditation for mental health and overall well-being. This blog entry explores how regular meditation practice can reduce stress, improve focus, and promote a sense of inner peace.',
      author: 'Nikola Jokic',
      comments: [
        "Meditation has truly transformed my life. It's amazing how such a simple practice can have such profound effects.",
      ],
    },
    {
      id: 3,
      title: 'Exploring the Wonders of Nature',
      description:
        'Embark on a virtual journey through stunning natural landscapes and wildlife encounters. This blog entry takes you on an adventure, showcasing breathtaking photographs and stories from various destinations around the world.',
      author: 'Lebron James',
      comments: [
        "The pictures in this blog are absolutely breathtaking! It's incredible how diverse and beautiful our planet is.",
      ],
    },
    {
      id: 4,
      title: '10 Easy and Delicious Recipes for Busy Professionals',
      description:
        'For those with a hectic schedule, this blog entry presents a collection of quick and tasty recipes that can be prepared in no time. From flavorful salads to comforting one-pot meals, these recipes are perfect for busy professionals seeking healthy and satisfying options.',
      author: 'Jayson Tatum',
      comments: [
        'As someone who often struggles to find time for cooking, these recipes are a lifesaver. Thank you for sharing!',
      ],
    },
  ];

  getBlogs = (): Blog[] => {
    return this.blogs;
  };

  constructor() {}
}
