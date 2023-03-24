import { Component } from '@angular/core';
import { IPosts } from '@mp/api/post/util';
import { PostState, PostsState} from '@mp/app/post/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  @Select(PostsState.posts) posts$!: Observable<IPosts | null>;
  @Select(PostsState.post) post$!: Observable<IPosts | null>;
}
