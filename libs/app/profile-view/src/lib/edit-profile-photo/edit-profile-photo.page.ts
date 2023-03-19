import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-photo',
  templateUrl: './edit-profile-photo.page.html',
  styleUrls: ['./edit-profile-photo.page.scss'],
})
export class EditProfilePhotoPageComponent {

  profileImageUrl: string;

  constructor(private modalController: ModalController) {
    this.profileImageUrl = '';
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result !== null) {
        this.profileImageUrl = reader.result.toString();
      }
    };
  }

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss();
  }
}
