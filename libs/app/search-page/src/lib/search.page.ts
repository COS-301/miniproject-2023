import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPageComponent {  
  searchValue = '';
  searchFocus = false;
  recentSearches: string[] = ['1','2','3','4','5']; //first 7 recents are shown
  searchUsers: string[] = [
    '@user1',
    '@user2exa',
    '@user3',
    '@user4',
    '@user5example',
    '@user6',
    '@user7test',
    '@user8',
    '@user9sport'];

  onSearchFocus() {
    this.searchFocus = true;
  }
  onSearchBlur() {
    this.searchFocus = false;
  }
  onSearch(searchTerm: string) {
    // Add search term to the beginning of the array
    if(searchTerm != '') this.recentSearches.unshift(searchTerm);
    //fetch user accounts based on search value and populate searchUsers array
  }  

  get RecentSearches() {
    return this.recentSearches;
  }
  get SearchedUsers() {
    return this.searchUsers.filter(user => {
      return user.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }
}
