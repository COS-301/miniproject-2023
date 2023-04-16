import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Discipline, FilterType, Post, PostList } from '@mp/api/feed/util';

@Component({
  selector: 'mp-feed-open',
  templateUrl: './feed-open.component.html',
  styleUrls: ['./feed-open.component.scss'],
})
export class FeedOpenComponent {

  image = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

  @Input() posts : PostList = {
    postsFound : false,
    list : [],
  };

  @Input() currentPost = 0;



  // posts : PostList = {
  //   postsFound : false,
  //   list : [
  //     {
  //       id : "post 1",
  //       title : "Title 1",
  //       author : null,
  //       description : "description 1",
  //       content : "content 1",
  //       discipline : Discipline.SCIENCE,
  //       time : 0,
  //   },
  //   {
  //     id : "post 2",
  //     title : "Title 2",
  //     author : null,
  //     description : "description 2",
  //     content : "content 2",
  //     discipline : Discipline.SCIENCE,
  //     time : 0,
  // },
  // {
  //   id : "post 3",
  //   title : "Title 3",
  //   author : null,
  //   description : "description 3",
  //   content : "content 3",
  //   discipline : Discipline.SCIENCE,
  //   time : 0,
  // }
  //   ],
  // };

  @Output() setCurrentPost = new EventEmitter<Post>();
  @Output() retutnToFeedClosed = new EventEmitter<void>();

  currentPostIndex = 0;

  ngOnChanges(changes:SimpleChanges){
    if(changes['currentPost']){
      this.currentPostIndex = changes['currentPost'].currentValue;
    }
  }

  setPost(data:Post){
    this.setCurrentPost.emit(data);
  }

  tStart = 0;
  tEnd = 0;

   touchStart(e : TouchEvent) {
    this.tStart = e.touches[0].pageX;
  }

  touchEnd() {


    if (this.tEnd-this.tStart > -200 && this.tEnd-this.tStart < 200) {
      //swipe gesture not big enough to be considered a swipe
      //do nothing
    }else if(this.tEnd-this.tStart > 200) {
      //go back one post
      console.log(this.posts?.list?.at(this.currentPostIndex))
      if (this.currentPostIndex > 0){
        this.currentPostIndex--;
      }

    }else if(this.tEnd-this.tStart < -200) {
      //go forward one post
      if(this.posts.list!=null){
        if (this.currentPostIndex < this.posts.list.length - 1){
          this.currentPostIndex++;
        }
      }

    }

    this.tStart = 0;
    this.tEnd = 0;
  }

  touchMove(e : TouchEvent) {
    this.tEnd = e.touches[0].pageX;
  }

  goBack(){
    this.retutnToFeedClosed.emit();
  }

}
