import { Component } from '@angular/core';
import { timeout } from 'rxjs';


@Component({
  selector: 'mp-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss']
})
export class SplashPage {

  constructor() {}

  countdownDisplay?: string;

  go(): void{
    setTimeout(()=>{
        this.countdownDisplay = 'go';
    },4000);
  }

}
