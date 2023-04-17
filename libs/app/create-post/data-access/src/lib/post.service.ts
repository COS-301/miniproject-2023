import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '@mp/api/feed/util';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://api.example.com/posts'; // Update with your API URL

  constructor(private http: HttpClient) {}

  // Create a new post
  createPost(post: Post, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('discipline',post.discipline);
    formData.append('image', file);

    return this.http.post<any>(`${this.apiUrl}`, formData);
  }
}
