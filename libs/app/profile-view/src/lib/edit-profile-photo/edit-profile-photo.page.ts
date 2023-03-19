import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProfileImageService } from '../ProfileImageService';

@Component({
  selector: 'app-edit-profile-photo',
  templateUrl: './edit-profile-photo.page.html',
  styleUrls: ['./edit-profile-photo.page.scss'],
})
export class EditProfilePhotoPageComponent {

  constructor(public modalController: ModalController, private alertCtrl: AlertController, private profileImageService: ProfileImageService) {}

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
      this.setProfileImage(''); 
      await alert.present();
    }
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result !== null) {
          this.setProfileImage(reader.result.toString());
        }
      };
    }
  }

  async cancel() {
    await this.modalController.dismiss();
  }

  async save() {
    await this.modalController.dismiss();
  }

  getProfileImageUrl(): string {
    return this.profileImageService.imageUrl;
  }

  setProfileImage(url: string) {
    this.profileImageService.imageUrl = url;
  }
}
