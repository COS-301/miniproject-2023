import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMemoryPageComponent } from './lib/add-memory.page';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})

export class ProfileViewPageComponent {
  memories = [];

  constructor(public modalController: ModalController) {}

  async addMemory() {
    const modal = await this.modalController.create({
      component: AddMemoryPageComponent
    });

    await modal.present();
    const {data} = await modal.onWillDismiss<never>();
    
    if (data) {
      this.memories.unshift(data);
    }
  }
  
}
