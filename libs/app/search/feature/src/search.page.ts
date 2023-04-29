
import { Component } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { IPostDetails, IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchUserPosts, GetAllPosts, GetUserPostsByHashtag } from '@mp/app/profile/util';


@Component({
  selector: 'mp-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  constructor(private router: Router, private store: Store, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      const value = queryParams.get('searchFor');
      if(value){
        const search = document.getElementById('searchBar') as HTMLElement;
        search.setAttribute("value", value);
        this.searchUser = value;
        this.userSearch();
      }
      });
  }

  @Select(ProfileState.searchPosts) searchPosts$: Observable<IPostDetails[]> | undefined;
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  searchUser='';
  // userSearch(){
  //   console.log(this.searchUser);
  //   this.store.dispatch(new FetchUserPosts(this.searchUser));
  // }
  errorMessage: string | null = null;

  userSearch() {

    
    const icon = document.getElementById('submitIcon') as HTMLElement;
    if (icon && this.searchUser !== '') {
      if(icon.getAttribute('name') === 'close-outline'){
        icon.setAttribute('name', 'checkmark-outline');
        icon.setAttribute('color', 'primary');
        const search = document.getElementById('searchBar') as HTMLElement;
        search.setAttribute("value", "");
        const hashtags = document.getElementById('hashtagsContent') as HTMLElement;
        hashtags.style.visibility = 'visible';
        hashtags.style.height = "100%";
        const results = document.getElementById('searchResults') as HTMLElement;
        results.style.visibility = 'hidden';
        results.style.height = "0px";
      }else{
        icon.setAttribute('name', 'close-outline');
        icon.setAttribute('color', 'danger');
        const hashtags = document.getElementById('hashtagsContent') as HTMLElement;
        hashtags.style.visibility = 'hidden';
        hashtags.style.height = "0px";
        const results = document.getElementById('searchResults') as HTMLElement;
        results.style.visibility = 'visible';
        results.style.height = "fit-content";
      }
      
    }else{
      const search = document.getElementById('searchBar') as HTMLElement;
      search.classList.add('shade');
      setTimeout(() => {
        search.classList.remove('shade');
      }, 1000);
      return;
    }

    

    if (this.searchUser.startsWith('#')) {
      this.searchByHashtag();
    } else {
      console.log(this.searchUser);
      this.store.dispatch(new FetchUserPosts(this.searchUser));
    }

  } //if the input starts with a hashtag, search by hashtag, else search by username


  
  toHomePage(){
    this.router.navigate(["/home"]);
  }
  fillBar(category: string){

    this.searchUser=category;
   document.getElementById("searchBar")?.setAttribute("value", category);
   this.userSearch();
  }

  searchByHashtag() {
    const hashtag = this.searchUser;
    console.log('Searching by hashtag:', hashtag);
    this.store.dispatch(new GetUserPostsByHashtag(hashtag)).subscribe({
      error: (err) => {
        console.log('Error:', err.message);
      },
    });
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
  getSlicedHashtag(hashtag: string): string {
    return hashtag.slice(1);
  }
}
