/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPageComponent implements OnInit {

  @ViewChild('new_chat') modal!: ModalController;
  @ViewChild('popover') popover!: PopoverController;

  segment = 'chats';
  open_new_chat = false;
  users = [
    { id: 1, name: 'Nikhil', photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
    { id: 2, name: 'Serah', photo: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg' },
    { id: 3, name: 'Jess', photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' }
  ];

  chatRooms = [
    { id: 1, name: 'Nikhil', photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
    { id: 2, name: 'Serah', photo: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg' },
    { id: 3, name: 'Jess', photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' }
  ];

  constructor(private router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
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

  getChat(item: any) {
    this.router.navigate(['/', 'inbox', 'chats', item?.id]);
    // this.router.navigate(['/home/inbox']);
  }
}
