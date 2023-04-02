import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'ms-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private router: Router) { }


  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  toHomePage() {
    this.router.navigate(["/home"]);
  }

  toSettingsPage() {
    this.router.navigate(["/settings"]);
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
  toNotificationsPage() {
    this.router.navigate(["/notifications"]);
  }
}
