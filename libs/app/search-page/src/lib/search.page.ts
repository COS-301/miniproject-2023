import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPageComponent {  
  searchValue: string | undefined;
  searchFocus = false;

  onSearchFocus() {
    this.searchFocus = true;
  }
  onSearchBlur() {
    this.searchFocus = false;
  }
}
