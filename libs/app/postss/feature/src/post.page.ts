import { Component } from '@angular/core';
import { IPost} from '@mp/api/postss/util';
import { PostState} from '@mp/app/postss/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  @Select(PostState.post) post$!: Observable<IPost | null>;

}
