import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
// import { IPost } from '@mp/api/postss/util';
// import { PostState } from '@mp/app/postss/data-access';
import { SubscribeToProfile } from '@mp/app/profile/util';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { SubscribeToPost } from '@mp/app/postss/util';

@Component({
  selector: 'ms-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  //post$: Observable<IPost | null> = this.store.select(PostState.post);
  constructor(private readonly store: Store, private router: Router) {}

  ionViewWillEnter() {
    this.store.dispatch(new SubscribeToProfile());
    //this.store.dispatch(new SubscribeToPost())
  }


  toHomePage() {
    this.router.navigate(["/home"]);
  }
  toSearchPage() {
    this.router.navigate(["/search"]);
  }
  toCreatePage() {
    this.router.navigate(["/create"]);
  }
  toPortfolioPage() {
    this.router.navigate(["/portfolio"]);
  }
  toProfilePage() {
    this.router.navigate(["/profile"]);
  }
toPostPage(){
  this.router.navigate(["/post"]);
}
}
