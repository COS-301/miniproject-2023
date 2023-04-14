import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
// import { CreatePost } from '@mp/app/postss/util';
// import { Hashtag } from '@mp/api/postss/util';

@Component({
  selector: 'mp-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  //posts$ = this.store.select(PostState.posts);
  constructor(private router: Router, private store : Store, private fb: FormBuilder) { }

  createPostForm = this.fb.group({
    createdBy: ['', Validators.required],
    content: ['', Validators.required],
    caption: ['', Validators.required],
    hashtag: ['', Validators.required],
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}

  onPostCreated() {
    console.log('Post created successfully');
    // Add any additional logic to execute after the post is created
  }
  toDashboard() {
    this.router.navigate(["/home"]);
  }
}
