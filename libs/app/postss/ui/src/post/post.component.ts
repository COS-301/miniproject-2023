
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CreatePost } from '@mp/app/postss/util';
import { Hashtag } from '@mp/api/postss/util';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
@Component({
  selector: 'ms-post-page-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  // postDetailsForm = this.fb.group({
  //   createdBy: ['', [Validators.required]],
  //   content: ['', [Validators.required]],
  //   caption: ['', [Validators.required]],
  //   hashtag: ['', [Validators.required]],
  // });

  // constructor(private readonly fb: FormBuilder, private readonly store: Store) {}

  // // createPost() {
  // //   const createdBy = this.postDetailsForm.value.createdBy || '';
  // //   const content = this.postDetailsForm.value.content || '';
  // //   const caption = this.postDetailsForm.value.caption || '';
  // //   const hashtagKey = this.postDetailsForm.value.hashtag as keyof typeof Hashtag;
  // // const hashtag = Hashtag[hashtagKey] || null;
  // //   this.store.dispatch(
  // //     new CreatePost({
  // //       createdBy,
  // //       content,
  // //       caption,
  // //       hashtag
  // //     })
  // //   ).subscribe(
  // //     () => {
  // //       console.log('CreatePost action dispatched successfully.');// Emit the event here
  // //     },
  // //     (error) => console.error('Error dispatching CreatePost action:', error)
  // //   );
  // // }
}
