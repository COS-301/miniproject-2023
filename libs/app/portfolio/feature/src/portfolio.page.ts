import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ProfileState } from '@mp/app/profile/data-access';
import { Observable } from 'rxjs';
import { IProfile } from '@mp/api/profiles/util';

@Component({
  selector: 'mp-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  items!: any[];
  constructor(private router: Router, private store: Store) { }

  ngOnInit() {

  //   this.store.dispatch(new getUserPostsFromFunction("jfbhsjk"));

   }

   @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  toHomePage() {
    this.router.navigate(["/home"]);
  }

  toSearchPage() {
    this.router.navigate(["/search"]);
  }
  toCreatePage() {
    this.router.navigate(["/create"]);
  }
  toPortfolioPage() {
    this.router.navigate(["/portfolio"]);
  }
  toProfilePage() {
    this.router.navigate(["/profile"]);
  }
}