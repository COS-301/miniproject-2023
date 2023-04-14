import { Component } from '@angular/core';
// import { IPost} from '@mp/api/postss/util';
// import { PostState} from '@mp/app/postss/data-access';
// import { Select } from '@ngxs/store';
// import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CreatePost } from '@mp/app/postss/util';
import { Hashtag, IPost } from '@mp/api/postss/util';
import { Observable } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { PostState } from '@mp/app/postss/data-access';

@Component({
  selector: 'ms-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  // @Select(PostState.post) post$!: Observable<IPost | null | undefined >;
  // @Select(actionsExecuting([CreatePost]))
  // busy$!: Observable<ActionsExecuting>;
  postDetailsForm = this.fb.group({
    createdBy: ['', [Validators.required]],
    content: ['', [Validators.required]],
    caption: ['', [Validators.required]],
    hashtag: ['', [Validators.required]],
  });
  showPassword = false;

  constructor(private readonly fb: FormBuilder, private readonly store: Store, private post :PostState) {
  }

  createPost() {
    this.store.dispatch(new CreatePost());
  }
}
