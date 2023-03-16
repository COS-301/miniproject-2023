import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  showNavbar!: boolean;
  constructor(private router: Router) {
    //These routes will have to be finalised once we have all the pages
    this.showNavbar = this.hasRoute('/home') || this.hasRoute('/messages') || this.hasRoute('/profile') || this.hasRoute('/notifications') || this.hasRoute('/post');
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
  navigate(page:string){
    //This gives errors for now as we need to implement all the routes properly
    this.router.navigate([page]);
  }
}
