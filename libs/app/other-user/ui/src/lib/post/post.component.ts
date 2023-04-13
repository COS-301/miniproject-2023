import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: any = {
    caption: '',
    // comments: [],
    imagePath: '',
  };
}
