import { Component, OnInit, Output } from '@angular/core';
import {
  ActionsExecuting,
  actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetFilterList, SetPost, SetPostList, SetTimeModification, SetUserTime } from '@mp/app/feed/util';
import { FeedState } from '@mp/app/feed/data-access';
import { FilterList, FilterType, Post, PostList, TimeModification, UserTime } from '@mp/api/feed/util';
@Component({
  selector: 'mp-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage {

  @Select(FeedState.postList) postList$!: Observable<PostList>;
  //  @Select(FeedState.userTime) userTime$!: Observable<UserTime>;

  feedOpen: boolean;
  userTime!: number | null;
  postsData: PostList = {
    postsFound : false,
    list : [],
  };

  constructor(private store: Store) {
    this.feedOpen = false;
  }

  ngOnInit(){
    this.store.dispatch(new SetPostList());
    //  this.store.dispatch(new SetUserTime());

    this.store.select(FeedState.postList).subscribe((feed) => {
      if (feed.model.list != null){

        this.postsData.postsFound = true;

        feed?.model.list?.forEach((post) => {
          this.postsData.list?.push(post);
        })
      }
     })

    //  this.store.select(FeedState.userTime).subscribe((userTime) => {
    //   if (userTime.model != null){
    //     this.userTime = userTime.model.timeAmount;
    //   }
    //  })
  }
  activeFilters: FilterList = {
    list: [],
  };

  setFilters($data:FilterType){

    this.postsData.list = [];//reset the posts data

    if(this.activeFilters.list?.includes($data)){
      this.activeFilters.list = this.activeFilters.list?.filter((item) => item !== $data);
    } else {
    this.activeFilters.list = this.activeFilters.list?.concat([$data]);
    }

    if (this.activeFilters.list) {
      this.store.dispatch(new SetFilterList({ list: this.activeFilters.list }));
    }

  }

  selectedPost = 0;

  setPost($data:Post){
    if(this.postsData.list?.indexOf($data)){
      this.selectedPost = this.postsData.list?.indexOf($data);
      console.log('selected post: ' + this.selectedPost);
    }

    this.store.dispatch(new SetPost({post : $data}));
    this.feedOpen = true;//user clicked on a post, the post is set and then the feed is open
  }

  closeFeed(){
    this.feedOpen = false;
  }

  updatePostTime($data:TimeModification){
    this.store.dispatch(new SetTimeModification({postID:$data.postID, time : $data.time}));
  }

}
