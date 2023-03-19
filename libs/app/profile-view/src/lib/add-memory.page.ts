import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPageComponent {
  memory = {
    title:'',
    description: '',
    image: '',
    date: '',
  };

  constructor(public modalController: ModalController){}

  save() {
    this.modalController.dismiss(this.memory);
  }

  cancel() {
    this.modalController.dismiss();
  }
}
