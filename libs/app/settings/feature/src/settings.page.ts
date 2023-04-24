import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logout } from '@mp/app/profile/util';
import {  Store } from '@ngxs/store';


@Component({
  selector: 'mp-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private router: Router, private readonly store: Store) { }

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
