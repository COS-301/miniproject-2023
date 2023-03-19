import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMemoryPageComponent } from './lib/add-memory/add-memory.page';
import { EditProfilePhotoPageComponent } from './lib/edit-profile-photo/edit-profile-photo.page';
import { Memory } from './lib/Memory';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPageComponent {
  memories: Memory[] = [];

  constructor(public modalController: ModalController) {}

  async addMemory() {
    const modal = await this.modalController.create({
      component: AddMemoryPageComponent,
    });

    await modal.present();
    // <{ memory: Memory; formattedDate: string }>
    const { data } = await modal.onDidDismiss();
    // && data.memory
    if (data) {
      this.memories.unshift(data);
    }
  }

  async editProfilePhoto() {
    const modal = await this.modalController.create({
      component: EditProfilePhotoPageComponent,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
  }
}
