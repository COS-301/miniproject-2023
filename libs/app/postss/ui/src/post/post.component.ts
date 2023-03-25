import { Component } from '@angular/core';
import { IPost } from '@mp/api/postss/util';
import { PostsState } from '@mp/app/postss/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  //@Select(PostsState.posts) profile$!: Observable<IPost | null>;
}
