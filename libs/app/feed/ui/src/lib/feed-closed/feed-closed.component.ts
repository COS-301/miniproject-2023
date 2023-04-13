import { Component, EventEmitter, Output } from '@angular/core';
import { FilterList, FilterType } from '@mp/api/feed/util';

@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {
  filters: FilterList = {
    list: [],
  };
  constructor(){
      this.filters.list?.push(FilterType.MOST_RECENT,
      FilterType.MOST_POPULAR,
      FilterType.SCIENCE_FILTER,
      FilterType.ART_FILTER,
      FilterType.NEWS_FILTER,
      FilterType.SPORT_FILTER,
      FilterType.FOOD_FILTER,
      FilterType.GAMING_FILTER)
  }

  @Output() filterChanged = new EventEmitter<FilterType>();

  onSetFilters(data:FilterType){
    this.filterChanged.emit(data);
  }
  posts: Array<{ title: string, creator: string, description: string, thumbnail: string }> = [{ title: 'title', creator: 'creator', description: 'description', thumbnail: 'thumbnail' }, { title: 'title', creator: 'creator', description: 'description', thumbnail: 'thumbnail' }, { title: 'title', creator: 'creator', description: 'description', thumbnail: 'thumbnail' }, { title: 'title', creator: 'creator', description: 'description', thumbnail: 'thumbnail' }];


  // @Select(FeedState.feed) feed$!: Observable<FeedState | null>;

  // constructor(private store: Store) { }

  // filterChanged() {
  //   console.log('filter changed');

  //   this.store.dispatch(new SetError('test error'));

  //   const myFilterList: FilterList = {
  //     list: [],
  //   };

  //   myFilterList.list!.push(FilterType.ART_FILTER);
  //   myFilterList.list!.push(FilterType.NEWS_FILTER);
  //   myFilterList.list!.push(FilterType.SPORT_FILTER);

  //   this.store.dispatch(new SetFilterList(myFilterList));
  // }

}

