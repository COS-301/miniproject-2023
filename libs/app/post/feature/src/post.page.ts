import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPageComponent { 

  constructor(private router: Router) { }

  MakeChallenge() {
    this.router.navigate(['/home/post/challenge']);
  }
}
