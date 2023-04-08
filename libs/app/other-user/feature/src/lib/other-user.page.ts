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

  posts: any[] = [
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
  ];

  badges: any[] = [
    {
      name: 'Rockstar',
      value: 60,
      imageSrc: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Einstein',
      value: 30,
      imageSrc: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ramsy',
      value: 70,
      imageSrc: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
  ]

  meters: any[] = [
    {
      name: 'Science',
      value: 60,
    },
    {
      name: 'Music',
      value: 70,
    },
    {
      name: 'Food',
      value: 50,
    },
  ]

  // NgOnInit() {

  // }

}
