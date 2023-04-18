
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { IPostDetails, IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FetchUserPosts, GetAllPosts } from '@mp/app/profile/util';
@Component({
  selector: 'mp-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  constructor(private router: Router, private store: Store) { }
  @Select(ProfileState.userPosts) userPosts$: Observable<IPostDetails[]> | undefined;
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  searchUser='';
  userSearch(){
    console.log(this.searchUser);
    this.store.dispatch(new FetchUserPosts(this.searchUser));
  }
  toHomePage(){
    this.router.navigate(["/home"]);
  }
  fillBar(category: string){
    console.log(category);
   const searchBar=document.getElementById("searchBar")?.setAttribute("value", category);
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
}
