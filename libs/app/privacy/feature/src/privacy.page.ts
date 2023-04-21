import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ms-privacy-page',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {

  constructor(private router: Router) { }

  toWelcomePage(){
    this.router.navigate(["/welcome"]);
  }
}
