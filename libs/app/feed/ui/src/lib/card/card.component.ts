import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() content!: any;
  Like(){
    console.log("Like button");
  }
  Dislike(){
    console.log("Dislike button");
  }
  Comment(){
    console.log("Comment button");
  }
  Share(){
    console.log("Share button");
  }
}
