import { Component } from '@angular/core';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss'],
})
export class ProfilerComponent {
  email: string = '';
  name: string = '';
  bio: string = '';
  status: string = '';

  handleSubmit(event: any): void {
    event.preventDefault();

    const formData = {
      email: this.email,
      name: this.name,
      bio: this.bio,
      status: this.status,
    };

    console.log(JSON.stringify(formData));
  }
}
