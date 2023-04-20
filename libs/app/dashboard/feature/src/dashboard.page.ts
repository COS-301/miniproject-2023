/* eslint-disable no-var */
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { IPostDetails, IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { FetchUserPosts, GetAllPosts } from '@mp/app/profile/util';


@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private router: Router, private store: Store) { }
  userId: string| null| undefined
  @Select(ProfileState.userPosts) userPosts$: Observable<IPostDetails[]> | undefined;
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;


  ngOnInit() {
    
    const userId = ' '; // Replace this with the actual user ID
console.log("here in dispatch");
    this.store.dispatch(new GetAllPosts(userId));
console.log("we done in dispatch")

    this.profile$.subscribe((profile) =>{

      this.userId = profile?.userId
    })
  }


  bid() {
    console.log("bid");
  }
  like() {
    console.log("like");
  }

  comment(postId: string| null| undefined) {

    /**
     * The reason for the snippet below is to get the post id and persist it to the comment page
     */
    const navigationExtras: NavigationExtras = {
      queryParams: {
        postValueId: postId,
        userValueId: this.userId
      }
    };

    //The persisting happens here

    this.router.navigate(["/comment"], navigationExtras);
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

}
