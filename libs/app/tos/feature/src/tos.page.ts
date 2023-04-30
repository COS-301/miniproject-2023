import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-tos-page',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage {

  constructor(private router: Router) { }

  toWelcomePage(){
    this.router.navigate(["/welcome"]);
  }
}
