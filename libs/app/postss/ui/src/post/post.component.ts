import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { PostState } from '@mp/app/postss/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Select(PostState.post) profile$!: Observable<IProfile | null>;
}
