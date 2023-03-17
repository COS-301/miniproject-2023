import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPageComponent {
  added = false;
  btn_text = "Send friend request";
  handlerMessage = '';
  roleMessage = ''
  
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to unfriend <user name>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Unfriend canceled';
          },
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Unfriened <user name>';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  addedNewFriend() {
    this.added = true;
    this.btn_text = "You are friends";
  }

  removeFriend() {
    this.added = false;
    this.btn_text = "Send friend request";
  }
}
