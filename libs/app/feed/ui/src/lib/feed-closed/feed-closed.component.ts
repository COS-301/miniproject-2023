import { Component, EventEmitter, Output } from '@angular/core';
import { FilterList, FilterType, Post, PostList } from '@mp/api/feed/util';

@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {
  filters: FilterList = {
    list: [],
  };

  posts: PostList = {
    postsFound : false,
    list : [],
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

      this.posts.postsFound = true;
      this.posts.list?.push(
        {
          id: '1',
          title: 'Post 1',
          author: {},
          description: 'Description 1',
          discipline: {},
          time: 0,
        } as Post,
      )
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

