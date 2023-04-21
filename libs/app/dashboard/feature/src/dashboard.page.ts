/* eslint-disable no-var */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IPostDetails, IProfile } from '@mp/api/profiles/util';
import { ProfileState, ProfileStateModel } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable, concatMap, filter, map, of, throwError, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FetchUserPosts, GetAllPosts } from '@mp/app/profile/util';
import { BuyPost } from '@mp/app/profile/util';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private router: Router, private store: Store) { }
  @Select(ProfileState.userPosts) userPosts$: Observable<IPostDetails[]> | undefined;

  ngOnInit() {
    const userId = ' '; // Replace this with the actual user ID
console.log("here in dispatch");
    this.store.dispatch(new GetAllPosts(userId));
console.log("we done in dispatch")
  }
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  bid() {
    console.log("bid");
  }
  like() {
    console.log("like");
  }
  comment() {
    this.router.navigate(["/comment"]);
  }

buyPost(i:number){
  this.getPostByIndex(i).subscribe((post) => {
    if (post?.postID) {
      // Perform your action with the post object
const postID = post.postID;
      console.log('Post:'+i);
this.store.dispatch(new BuyPost(postID));
    } else {
      console.error('Invalid index');
    }
  });
}
getPostByIndex(index: number): Observable<IPostDetails | undefined> {
if(!this.userPosts$){
  return throwError(new Error('userPosts$ is undefined'));
}
  return this.userPosts$.pipe(
    concatMap(posts => posts ? of(posts[index]) : of(undefined))
  );
}
  trending() {

    var trend = <HTMLInputElement>document.getElementById("trendingButton");
    var follow = <HTMLInputElement>document.getElementById("followingButton");
    if (trend != null)
      trend.style.backgroundColor = ('var(--ion-color-primary)');
    if (follow != null)
      follow.style.backgroundColor = ('rgba(255,255,255,0)');
  }

  following() {
  var trend = <HTMLInputElement>document.getElementById("trendingButton");
  var follow = <HTMLInputElement>document.getElementById("followingButton");
  if (trend != null)
    trend.style.backgroundColor = ('rgba(255,255,255,0)');
  if (follow != null)
    follow.style.backgroundColor = ('var(--ion-color-primary)');
  }

  toSearchPage(){
    this.router.navigate(["/search"]);
  }

  getSlicedHashtag(hashtag: string): string {
    return hashtag.slice(1);
  }

}
