import { Component } from '@angular/core';

@Component({
  selector: 'feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  contentArr: string[] = ["Card1", "Card2"];
  Discoveryt(){
    console.log("Discover");
  }

  homet(){
    console.log("Home");
  }
}
