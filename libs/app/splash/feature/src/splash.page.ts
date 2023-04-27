import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) { }

  /* eslint-disable */
  ngOnInit() {}
  /* eslint-enable */

  ionViewDidEnter() {
    setTimeout(()=>{
      this.router.navigate(['/welcome']);
    },
    4000);
  }
}
