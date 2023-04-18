import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select} from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'ms-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @ViewChild('new_chat') modal!: ModalController;
  @ViewChild('popover') popover!: PopoverController;


  constructor(private router: Router) { }


  ngOnInit() {
    // console.log('');
  }

  logout() {
    this.popover.dismiss();
  }

  goToSearch() {
    this.router.navigate(['/home/search']);
  }

  goToChat() {
    this.router.navigate(['/home/inbox']);
  }

  goToDash() {
    this.router.navigate(['/home/dashboard']);
  }

  goToNotifications() {
    this.router.navigate(['/home/notifications']);
  }

  goToPost() {
    this.router.navigate(['/home/post']);
  }

  goToChallenge() {
    // this.router.navigate(['/home/challenge']);
  }


}