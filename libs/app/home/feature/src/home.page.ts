import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
// import { SubscribeToProfile } from '@mp/app/profile/util';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import {OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'ms-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @ViewChild('new_chat') modal!: ModalController;
  @ViewChild('popover') popover!: PopoverController;

  segment = 'chats';
  open_new_chat = false;
 
  // users = [
  //   { id: 1, name: 'Nikhil', photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
  //   { id: 2, name: 'Serah', photo: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg' },
  //   { id: 3, name: 'Jess', photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' }
  // ];

  // chatRooms = [
  //   { id: 1, name: 'Nikhil', photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
  //   { id: 2, name: 'Serah', photo: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg' },
  //   { id: 3, name: 'Jess', photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' }
  // ];

  // constructor(private readonly store: Store) {}

  constructor(private router: Router) { }

  // ionViewWillEnter() {
  //   this.store.dispatch(new SubscribeToProfile());
  // }

  
  ngOnInit() {
    // console.log('');
  }

  logout() {
    this.popover.dismiss();
  }

  onSegmentChanged(event: any) {
    //
  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {
    // 
  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item: any) {
    //
  }

  goToSearch() {
    // this.router.navigate(['/', 'inbox', 'chats', );
  }

  goToChat() {
    this.router.navigate(['/home/inbox']);
    console.log('Success'); 
  }

  goToNotifications() {
    // this.router.navigate(['/', 'inbox', 'chats', );
  }

  goToAddContent() {
    // this.router.navigate(['/', 'inbox', 'chats', );
  }

  
}
