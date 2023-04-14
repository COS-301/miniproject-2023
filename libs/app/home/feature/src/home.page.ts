import { Component, OnInit } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { SubscribeToProfile } from '@mp/app/profile/util';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenubarService } from '@mp/app/services/feature';
import { Tab, ToggleTab } from '@mp/app/home/utils';
import { HomeState } from '@mp/app/home/data-access';

@Component({
  selector: 'ms-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(HomeState.getTabs) tabs$!: Observable<Tab[]>; 

  menuShown: boolean;

  constructor(private store: Store, private menubarService: MenubarService) {
    this.menuShown = this.menubarService.menuStatus;
  }

  ngOnInit() {
    this.store.dispatch(new ToggleTab([
      {
        'name': 'feed',
        'active': true
      },
      {
        'name': 'search',
        'active': false
      },
      {
        'name': 'profile',
        'active': false
      }
    ]));
    this.tabs$.subscribe(console.log);
  }

  getMenuStatus() {
    return this.menubarService.menuStatus;
  }

  ionViewWillEnter() {
    this.store.dispatch(new SubscribeToProfile());
  }

  toggleTab(name:string, active: boolean) {
    let tabs: {name: string, active: boolean}[];

    if (name === "feed") {
      tabs = [
        {
          'name': name,
          'active': active
        },
        {
          'name': 'search',
          'active': false
        },
        {
          'name': 'profile',
          'active': false
        }
      ]
    }
    else if (name === "search") {
      tabs = [
        {
          'name': 'feed',
          'active': false
        },
        {
          'name': name,
          'active': active
        },
        {
          'name': 'profile',
          'active': false
        }
      ]
    }
    else {
      tabs = [
        {
          'name': 'feed',
          'active': true
        },
        {
          'name': 'search',
          'active': false
        },
        {
          'name': name,
          'active': active
        }
      ]
    }

    this.store.dispatch(new ToggleTab(tabs));
  }
}
