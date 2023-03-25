import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  // A bunch of dummy trending posts
  trending = [
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/18/300/300"},
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/19/300/300"},
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/20/300/300"},
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/21/300/300"},
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/22/300/300"},
    { title: "I am a trending post", desc: "I am a trending post description", img: "https://picsum.photos/id/23/300/300"},
  ]

  isSearchbarVisible = false;

  toggleSearchbar() {
    this.isSearchbarVisible = !this.isSearchbarVisible;
  }

  loadData(event: any) {
    setTimeout(() => {
      event.target.complete();
      event.target.disabled = true;
    }, 2000);
  }
}
