import { Component, OnInit } from '@angular/core';
import {
  ActionsExecuting,
  actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetFilterList, SetPost, SetPostList, SetTimeModification, SetUserTime } from '@mp/app/feed/util';
import { FeedState } from '@mp/app/feed/data-access';
import { FilterList, FilterType } from '@mp/api/feed/util';
@Component({
  selector: 'mp-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage {

  feedOpen = false;

  onClick() {
    this.feedOpen = !this.feedOpen;
  }

  @Select(FeedState.feed) feed$!: Observable<FeedState | null>;

  constructor(private store: Store) { }

  filterChanged() {
    console.log('filter changed');

    const myFilterList: FilterList = {
      list: [],
    };

    myFilterList.list?.push(FilterType.ART_FILTER);
    myFilterList.list?.push(FilterType.NEWS_FILTER);
    myFilterList.list?.push(FilterType.SPORT_FILTER);

    this.store.dispatch(new SetFilterList(myFilterList));

  }

}
