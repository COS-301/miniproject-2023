import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMemoryPageComponent } from './lib/add-memory/add-memory.page';
import { EditProfilePhotoPageComponent } from './lib/edit-profile-photo/edit-profile-photo.page';
import { Memory } from './lib/Memory';
import { ProfileImage } from './lib/ProfileImage';
import { ProfileImageService } from './lib/ProfileImageService';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPageComponent implements OnInit {
  memories: Memory[] = [];
  profileImage: ProfileImage;

  constructor(public modalController: ModalController, private profileImageService: ProfileImageService) {
    this.profileImage = profileImageService.profileImage;
  }

  ngOnInit(): void {
      this.profileImage = this.profileImageService.profileImage;
  }
  

  async addMemory() {
    const modal = await this.modalController.create({
      component: AddMemoryPageComponent,
    });

    await modal.present();
    
    const { data } = await modal.onDidDismiss();
    
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
