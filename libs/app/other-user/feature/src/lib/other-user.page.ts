import { Component } from '@angular/core';


@Component({
  selector: 'mp-other-user',
  templateUrl: './other-user.page.html',
  styleUrls: ['./other-user.page.css']
})
export class OtherUserPage {
  private: boolean = true;
  friends: boolean = true;
  deus: boolean = true;
  dead: boolean = false;
}
