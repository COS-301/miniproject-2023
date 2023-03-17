import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPageComponent {
  added = false;
  btn_text = "Send friend request";

  addedNewFriend() {
    this.added = true;
    this.btn_text = "You are friends";
  }
}
