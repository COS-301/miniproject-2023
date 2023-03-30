import { Component } from '@angular/core';


@Component({
  selector: 'mp-other-user-page',
  templateUrl: './other-user.page.html',
  styleUrls: ['./other-user.page.css']
})
export class OtherUserPage {
  private: boolean = true;
  friends: boolean = true;
  deus: boolean = true;
  dead: boolean = false;

  user: any = {
    name: 'Jon Snow',
    pfp: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    bio: 'I know nothing',
    location: 'The wall',
    status: 'Deus',
    time: '10:50:10',
    friends: true,
    private: true
  }

  NgOnInit() {

  }

}
