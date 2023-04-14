import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPost } from '@mp/api/postss/util';
import { PostState } from '@mp/app/post/data-access';
import { CreatePost } from '@mp/app/post/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-try-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  @Select(PostState.post) post$!: Observable<IPost | null>;
  @Select(actionsExecuting([CreatePost]))
  busy$!: Observable<ActionsExecuting>;
  postDetailsForm = this.fb.group({
    createdBy: ['', [Validators.required]],
    content: ['', [Validators.required]],
    caption: ['', [Validators.required]],
    hashtag: ['', [Validators.required]],
  });
  showPassword = false;

  get createdBy() {
    return this.postDetailsForm.get('createdBy');
  }

  get content() {
    return this.postDetailsForm.get('content');
  }

  get caption() {
    return this.postDetailsForm.get('caption');
  }

  get hashtag() {
    return this.postDetailsForm.get('hashtag');
  }
  constructor(private readonly fb: FormBuilder, private readonly store: Store) {
  }

  createPost() {
    this.store.dispatch(new CreatePost());
  }
}