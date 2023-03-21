import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPageComponent {  
  searchValue = '';
  searchFocus = false;
  currentFilter = 'Top';

  memoriesArray: any[] = [
    {
      username: '@username',
      profileUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60', 
      imgUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      title: "Last day of Highschool",
      description: "Example of a description for the memory",
      comments: [{}],
      timePosted: '2020-11-14T10:30:00.000-07:00'
    }
  ];
  recentSearches: string[] = ['1','2','3','4','5']; //first 7 recents are shown
  searchResults: string[] = [
    '@user1',
    '@user2exa',
    '@user3',
    '@user4',
    '@user5example',
    '@user6',
    '@user7test',
    '@user8',
    '@user9sport'];
  tempSearchResults: string[] = [];

  constructor(private navCtrl: NavController) {}

  onSearchFocus() {
    this.searchFocus = true;
  }
  onSearchBlur() {
    this.searchFocus = false;
  }
  onInputChange() {
    this.onSearchFocus();
    this.tempSearchResults = this.SearchResults;
  }
  onSearch(searchTerm: string) {
    // Add search term to the beginning of the array
    if(searchTerm != '') {
      this.recentSearches.unshift(searchTerm);
    }
    this.navCtrl.navigateForward('/search-results');
    //fetch user accounts based on search value and populate searchUsers array
  } 
  chosenRecentSearch(event: MouseEvent, search: string){
    event.stopPropagation();
    this.searchValue = search;
    alert(event);
  }

  get RecentSearches() {
    return this.recentSearches;
  }
  get SearchResults() {
    return this.searchResults.filter(user => {
      return user.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  get Memories() {
    return this.memoriesArray;
  }

  //function to covert timePosted to dd MMMM yyyy
  convertTimePostedToDate(timePosted: string) : string {
    const date = new Date(timePosted);
    return formatDate(date, 'dd MMMM yyyy', 'en-US');
  }
}
