import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  contentArr: string[] = ["Card1", "Card2"];
  LHome!: boolean;
  LDiscovery!: boolean;

  constructor(){
    this.LHome = true;
    this.LDiscovery = false;
  }
  Discoveryt(){
    this.LHome = false;
    this.LDiscovery = true;
    console.log("Discover");
  }

  homet(){
    console.log("Home");
    this.LHome = true;
    this.LDiscovery = false;
  }

}
