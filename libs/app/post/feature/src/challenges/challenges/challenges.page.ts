import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPageComponent {


  constructor(private router: Router) { }

  MakePost() {
    this.router.navigate(['/home/post']);
  }
}
