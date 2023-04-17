import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Discipline, FilterType, Post, PostList, TimeModification } from '@mp/api/feed/util';

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

  startTime = 0;
  endTime = 0;

  @Output() setCurrentPost = new EventEmitter<Post>();
  @Output() retutnToFeedClosed = new EventEmitter<void>();
  @Output() updatePostTime = new EventEmitter<TimeModification>();

  currentPostIndex = 0;

  ngOnInit(){
    this.startTime = Date.now();
    this.setPost(this.posts.list?.at(this.currentPostIndex) as Post);
  }

  ngOnDestroy(){
    this.endTime = Date.now();
    this.updatePostTime.emit({
      postID : this.posts.list?.at(this.currentPostIndex)?.id as string,
      time : this.endTime - this.startTime,
    });
  }

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
      if(this.startTime != 0){
        this.endTime = Date.now();
        this.updatePostTime.emit({
          postID : this.posts.list?.at(this.currentPostIndex)?.id as string,
          time : this.endTime - this.startTime,
        });
      }
      this.startTime = Date.now();//reset timer

      console.log(this.posts?.list?.at(this.currentPostIndex))
      if (this.currentPostIndex > 0){
        this.currentPostIndex--;
      }
      this.setPost(this.posts.list?.at(this.currentPostIndex) as Post);

    }else if(this.tEnd-this.tStart < -200) {
      //go forward one post
      if(this.startTime != 0){
        this.endTime = Date.now();
        this.updatePostTime.emit({
          postID : this.posts.list?.at(this.currentPostIndex)?.id as string,
          time : this.endTime - this.startTime,
        });
      }
      this.startTime = Date.now();//reset timer
      if(this.posts.list!=null){
        if (this.currentPostIndex < this.posts.list.length - 1){
          this.currentPostIndex++;
        }
      }
      this.setPost(this.posts.list?.at(this.currentPostIndex) as Post);

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
