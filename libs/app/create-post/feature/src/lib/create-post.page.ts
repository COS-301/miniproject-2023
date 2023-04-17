import { Component } from '@angular/core';
import { PostService } from './post.service'; // Example service for handling post submission
import { Location } from '@angular/common';



@Component({
  selector: 'mp-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss']
})
export class CreatePostPage {
  post = {
    user:'',
    title: '',
    caption: '',
    link: '',
    tag: '',
    photo: null
  };

  constructor(private postService: PostService, private location: Location) {}
  
  goBack() {
    this.location.back();
  }
  

  submitForm() {
    // Validate form data, e.g., check if required fields are filled out
    if (!this.post.title) {
      alert('Please enter a title.');
      return;
    }

    // Call the post service to submit the form data
    this.postService.createPost(this.post)
      .then(response => {
        // Handle successful post submission, e.g., show a success message
        alert('Post created successfully!');
        // Reset form data
        this.post = {
          user: '',
          title: '',
          caption: '',
          link: '',
          tag: '',
          photo: null
        };
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        alert('Failed to create post. Please try again.');
      });
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    // Now you can access target.files property
    // and perform the desired logic with the selected files
  }
}
