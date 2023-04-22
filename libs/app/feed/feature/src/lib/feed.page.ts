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

  constructor(private router: Router){
    this.LHome = true;
    this.LDiscovery = false;
  }
  Discoveryt(){
    this.LHome = false;
    this.LDiscovery = true;
    console.log("Discovery");
  }

  homet(){
    console.log("Home");
    this.LHome = true;
    this.LDiscovery = false;
  }

  // goToLeaderboard(){
  //   // this.router.navigate(['/home/profile']);
  // }

  // checkFollowing(){
  //   // this.router.navigate(['/home/profile']);
  // }

  // checkFollowers(){
  //   // this.router.navigate(['/home/profile']);
  // }

  // logout(){
  //   // this.router.navigate(['/home/profile']);
  // }

  // goToMyProfile(){
  //   this.router.navigate(['/home/userprofile']);
  // }

  // goToProfile(){
  //   this.router.navigate(['/home/profile']);
  // }

  // goToSettings(){
  //   this.router.navigate(['/home/settings']);
  // }

}
