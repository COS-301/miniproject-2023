import { Component } from '@angular/core';

@Component({
  selector: 'mp-feed-closed',
  templateUrl: './feed-closed.component.html',
  styleUrls: ['./feed-closed.component.scss']
})
export class FeedClosedComponent {

  filters: Array<string> = [ 'All', 'My', 'Following', 'Popular', 'Arts', 'Business', 'Comedy', 'Education', 'Entertainment', 'Film', 'Food', 'Games', 'Health', 'History', 'Music', 'News', 'Politics', 'Science', 'Sports', 'Technology', 'Travel' ];
  posts : Array<{title:string, creator:string, description:string, thumbnail:string}> = [{title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}, {title:'title', creator:'creator', description:'description', thumbnail:'thumbnail'}];
}
