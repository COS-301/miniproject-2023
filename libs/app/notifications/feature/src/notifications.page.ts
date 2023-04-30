import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'mp-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  constructor(private router: Router) {}

  /* eslint-disable */
  ngOnInit() {}
  /* eslint-enable */
  toHomePage() {
    this.router.navigate(['/profile']);
  }
}
