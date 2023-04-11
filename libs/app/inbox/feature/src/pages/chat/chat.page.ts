import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPageComponent implements OnInit {
  name = 'Sender';
  message!: string;
  isLoading = false;
  currentUserId = 1;
  chats = [
    { id: 1, sender: 1, message: 'hi' },
    { id: 2, sender: 2, message: 'hey' }
  ];

  // constructor() {
  // }

  constructor(private alertController: AlertController) {}

  async onMessagePress(chat: any) {
    const alert = await this.alertController.create({
      header: 'Delete Message',
      message: 'Are you sure you want to delete this message?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            // Perform deletion logic here
            console.log('Delete clicked');
          }
        }
      ]
    });

  await alert.present();
}

  ngOnInit() {
    console.log('');
  }

  sendMessage() {
    // do nothing.
  }
}