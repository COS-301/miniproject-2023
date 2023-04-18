import { Component } from '@angular/core';
import { timeout } from 'rxjs';


@Component({
  selector: 'mp-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss']
})
export class SplashPage {

    constructor() {};

  
    ngOnInit(){

    
      setTimeout(() => {
        let element:HTMLElement = document.getElementById('trigger') as HTMLElement;
        element.click();
        
    }, 3000);
    }
  }

