import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '@mp/api/profiles/util';
import { Logout } from '@mp/app/auth/util';
import { ProfileState } from '@mp/app/profile/data-access';
import {  Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'mp-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  private profileSubscription!: Subscription;
  constructor(private router: Router, private readonly store: Store) { this.profileSubscription = this.profile$.subscribe((profile) => {
    if (profile && profile.time === 0) {
      // User's time reached 0, log them out
      this.store.dispatch(new Logout());
    }
  });
}

ngOnDestroy() {
  // Clean up the subscription when the component is destroyed
  if (this.profileSubscription) {
    this.profileSubscription.unsubscribe();
  }
}

  /* eslint-disable */
  ngOnInit() {}
  /* eslint-enable */

  toProfilePage() {
    this.router.navigate(["/profile"]);
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
