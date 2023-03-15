import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private router: Router) {}
  hasRoute(route: string) {
    return this.router.url === route;
  }
  navigate(page:string){
    //This gives errors for now as we need to implement all the routes properly
    this.router.navigate([page]);
  }
}
