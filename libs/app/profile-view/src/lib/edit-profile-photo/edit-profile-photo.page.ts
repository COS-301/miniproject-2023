import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-photo',
  templateUrl: './edit-profile-photo.page.html',
  styleUrls: ['./edit-profile-photo.page.scss'],
})
export class EditProfilePhotoPageComponent {

  profileImageUrl: string;

  constructor(public modalController: ModalController, private alertCtrl: AlertController) {
    this.profileImageUrl = '';
  }

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file || !file.type.match(/image\/*/) ) {
      const alert = await this.alertCtrl.create({
        cssClass: 'file-select-alert',
        header: 'Invalid file selected',
        subHeader: 'Only images are allowed',
        buttons: [{
          text: 'OK',
          handler: () => {
            console.log('Alert dismissed')
          }
        }]
      });
      
      event.target.value = null;
      this.profileImageUrl = '';
      await alert.present();
    }
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result !== null) {
          this.profileImageUrl = reader.result.toString();
        }
      };
    }
  }

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.profileImageUrl);
  }

  getProfileImageUrl(): string {
    return this.profileImageUrl;
  }
}
