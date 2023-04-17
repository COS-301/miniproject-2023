import { Component, EventEmitter, Output, Input, ChangeDetectorRef, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FilterList, FilterType, Post, PostList } from '@mp/api/feed/util';
import { Store } from '@ngxs/store';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { Observable } from 'rxjs';

@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {

  @Input() posts : PostList = {
    postsFound : false,
    list : [],
  };

  filters: FilterList = {
    list: [],
  };

  constructor(){
      this.filters.list?.push(
      FilterType.MOST_RECENT,
      FilterType.MOST_POPULAR,
      FilterType.SCIENCE_FILTER,
      FilterType.ART_FILTER,
      FilterType.NEWS_FILTER,
      FilterType.SPORT_FILTER,
      FilterType.FOOD_FILTER,
      FilterType.GAMING_FILTER)
  }

  @Output() filterChanged = new EventEmitter<FilterType>();
  @Output() setCurrentPost = new EventEmitter<Post>();


  onSetFilters(data:FilterType){
    this.filterChanged.emit(data);
  }

  setPost(data:Post){
    this.setCurrentPost.emit(data);
  }


}

