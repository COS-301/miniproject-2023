import { Component } from '@angular/core';

@Component({
  selector: 'mp-feed-open',
  templateUrl: './feed-open.component.html',
  styleUrls: ['./feed-open.component.scss'],
})
export class FeedOpenComponent {

  image = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

  posts : Array<{title: string, content: string, image: string, postTime: number, creator: string}> = [
    {title: 'Post 1', content: 'This is the first post, this is just some dummy text to take up some space and see how the page responds. The actual post description will be here eventually', image: this.image, postTime: 1589, creator: 'John'},
    {title: 'Post 2', content: 'This is the first post, this is just some dummy text to take up some space and see how the page responds. The actual post description will be here eventually', image: this.image, postTime: 1589, creator: 'John'},
    {title: 'Post 3', content: 'This is the third post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 4', content: 'This is the fourth post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 5', content: 'This is the fifth post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 6', content: 'This is the sixth post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 7', content: 'This is the seventh post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 8', content: 'This is the eighth post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 9', content: 'This is the ninth post', image: this.image, postTime: 158, creator: 'John'},
    {title: 'Post 10', content: 'This is the first post, this is just some dummy text to take up some space and see how the page responds. The actual post description will be here eventually', image: this.image, postTime: 158, creator: 'John'},
  ];

  tStart = 0;
  tEnd = 0;

   touchStart(e : TouchEvent) {
    this.tStart = e.touches[0].pageX;
  }

  currentPostIndex = this.posts.length -1;

  touchEnd() {


    if (this.tEnd-this.tStart > -200 && this.tEnd-this.tStart < 200) {
      //swipe gesture not big enough to be considered a swipe
      console.log('not valid swipe');
      (<HTMLStyleElement>document.getElementById('post-' + this.currentPostIndex)).style.transform = 'translateX(0%)';
      (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = ".3s";

      setTimeout(() => {
        (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = "0s";
      }, 350);
    }else if(this.tEnd-this.tStart > 200) {
      //go back one post
      console.log('swipe right');
      this.currentPostIndex++;
      (<HTMLStyleElement>document.getElementById('post-' + this.currentPostIndex)).style.transform = 'translateX(0%)';
      console.log('post-' + this.currentPostIndex);

      (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = ".5s";

      setTimeout(() => {
        (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = "0s";
      }, 500);

    }else if(this.tEnd-this.tStart < -200) {
      //go forward one post
      console.log('swipe left');

      (<HTMLStyleElement>document.getElementById('post-' + this.currentPostIndex)).style.transform = 'translateX(-100%)';
      console.log('post-' + this.currentPostIndex);

      (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = ".5s";
      this.currentPostIndex--;
      setTimeout(() => {
        (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transition = "0s";
      }, 500);

    }

    this.tStart = 0;
    this.tEnd = 0;
  }

  touchMove(e : TouchEvent) {
    this.tEnd = e.touches[0].pageX;
    const deltaX = this.tStart - this.tEnd;

    if (deltaX > 0) {
      //swiping right
      (<HTMLStyleElement>document.getElementById("post-"+this.currentPostIndex)).style.transform = "translateX("+ -deltaX+"px)";

  }



  }

 convertTime(time : number) {
    let timeString = '';
    if (time < 60) {
      timeString = time + '';
    } else if (time < 3600) {
      timeString =  ':' + Math.floor(time/60);
    } else if (time < 86400) {
      timeString = ':' + Math.floor(time/3600) ;
    }
    return timeString;
  }

}
