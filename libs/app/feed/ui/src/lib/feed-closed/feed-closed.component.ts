import { Component } from '@angular/core';
import {
  ActionsExecuting,
  actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetFilterList, SetPost, SetPostList, SetTimeModification, SetPostListLoading, SetUserTime } from '@mp/app/feed/util';
import { FilterType, FilterList } from '@mp/api/feed/util';
import { FeedState } from '@mp/app/feed/data-access';
import { SetError } from '@mp/app/errors/util';
@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {

  filters: Array<string> = [ 'All', 'My', 'Following', 'Popular', 'Arts', 'Business', 'Comedy', 'Education', 'Entertainment', 'Film', 'Food', 'Games', 'Health', 'History', 'Music', 'News', 'Politics', 'Science', 'Sports', 'Technology', 'Travel' ];
  posts : Array<{title:string, creator:string, description:string, thumbnail:string}> = [{title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}];


  @Select(FeedState.feed) feed$!: Observable<FeedState | null>;

  constructor(private store: Store) { }

  filterChanged(){
    console.log('filter changed');

    this.store.dispatch(new SetError('test error'));

    const myFilterList: FilterList = {
      list: [],
  };

      myFilterList.list.push(FilterType.ART_FILTER);
      myFilterList.list.push(FilterType.NEWS_FILTER);
      myFilterList.list.push(FilterType.SPORT_FILTER);

    this.store.dispatch(new SetFilterList(myFilterList));
  }

}

