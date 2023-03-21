import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPageComponent {

  memoriesArray: any[] = [
    {
      username: '@username',
      imgUrl: "",
      title: "Last day of Highschool",
      description: "Example of a description for the memory",
      comments: [{}],
      date: '14 November 2020'
    }
  ];

  get Memories() {
    return this.memoriesArray;
  }
}
