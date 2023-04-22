import { Component, Renderer2 } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select} from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'ms-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;


  constructor(private router: Router, private renderer: Renderer2, private menuCtrl?: MenuController) {}


  ngOnInit() {
    const colorTheme = localStorage.getItem('color-theme');
  
    if (colorTheme) {
      this.renderer.setAttribute(document.body, 'color-theme', colorTheme);
    }
  }


  logout() {
    // this.popover.dismiss();
  }

  goToSearch() {
    this.router.navigate(['/home/search']);
  }

  goToChat() {
    this.router.navigate(['/home/inbox']);
  }

  goToFeed() {
    this.router.navigate(['/home/feed']);
  }

  goToNotifications() {
    this.router.navigate(['/home/notifications']);
  }

  goToPost() {
    this.router.navigate(['/home/post']);
  }

  goToChallenge() {
    this.router.navigate(['/home/challenge']);
  }

  goToSettings() {
    if (this.menuCtrl) {
      this.menuCtrl.close();
  }
    this.router.navigate(['/home/settings']);
  }

  goToProfile() {
    if (this.menuCtrl) {
      this.menuCtrl.close();
  }
    this.router.navigate(['/home/profile']);
  }

  checkFollowers() {
    // this.router.navigate(['/home/challenge']);
  }
  checkFollowing() {
    // this.router.navigate(['/home/challenge']);
  }

  goToLeaderboard() {
    // this.router.navigate(['/home/challenge']);
  }

  goToMyProfile() {
    if (this.menuCtrl) {
      this.menuCtrl.close();
  }
    this.router.navigate(['/home/userprofile']);
  }


}