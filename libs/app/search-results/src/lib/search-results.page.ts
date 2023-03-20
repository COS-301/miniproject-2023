import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPageComponent {  
  searchValue = '';
  searchFocus = false;
  showFilters = false;
  currentFilter = 'Top Accounts';

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

  onSearchFocus() {
    this.searchFocus = true;
  }
  onSearchBlur() {
    this.searchFocus = false;
  }
  onInputChange() {
    this.showFilters = false;
    this.onSearchFocus();
    this.tempSearchResults = this.SearchResults;
  }
  onSearch(searchTerm: string) {
    // Add search term to the beginning of the array
    if(searchTerm != '') {
      this.recentSearches.unshift(searchTerm);
    }
    if (searchTerm != '' && this.tempSearchResults.length != 0){
      this.showFilters = true;
    }
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

  //filter search results
  setFilter(filter: string) {
    this.currentFilter = filter;
    this.filterResults();
  }

  filterResults() {
    if (this.currentFilter === 'Top Accounts') {
      this.searchResults = this.getTopResults();
    } else if (this.currentFilter === 'Memories') {
      this.searchResults = this.getMemoriesResults();
    } else if (this.currentFilter === 'Date') {
      this.searchResults = this.getDateResults();
    }
  }

  //######FIX code below to filter searchResults array
  getTopResults(): string[] {
    // Return the top search results
    return this.searchResults;
  }

  getMemoriesResults(): string[] {
    // Return the search results for memories
    return this.searchResults;    
  }

  getDateResults(): string[] {
    // Return the search results for date
    return this.searchResults;
  }
}
