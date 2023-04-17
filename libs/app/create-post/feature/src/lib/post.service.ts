import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  apiUrl = 'https://api.example.com/posts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  createPost(postData: any): Promise<any> {
    // Create a new FormData object to send the form data as multipart/form-data
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('caption', postData.caption);
    formData.append('link', postData.link);
    formData.append('tag', postData.tag);
    if (postData.photo) {
      formData.append('photo', postData.photo, postData.photo.name);
    }

    // Send a POST request to the API endpoint with the form data
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, formData)
        .subscribe(
          (response) => {
            // Handle successful response, e.g., parse response data
            console.log('Post created:', response);
            resolve(response);
          },
          (error) => {
            // Handle error, e.g., show an error message
            console.error('Failed to create post:', error);
            reject(error);
          }
        );
    });
  }
}
