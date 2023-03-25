import { Component } from '@angular/core';
import { IPost } from '@mp/api/postss/util';
import { PostState } from '@mp/app/postss/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(PostState.posts) posts$!: Observable<IPost[]>;

}
