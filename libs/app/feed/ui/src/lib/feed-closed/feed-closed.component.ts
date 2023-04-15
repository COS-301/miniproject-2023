import { Component } from '@angular/core';

@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {
  filters: Array<string> = ['All', 'My', 'Following', 'Popular', 'Arts', 'Business', 'Comedy', 'Education', 'Entertainment', 'Film', 'Food', 'Games', 'Health', 'History', 'Music', 'News', 'Politics', 'Science', 'Sports', 'Technology', 'Travel'];
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

