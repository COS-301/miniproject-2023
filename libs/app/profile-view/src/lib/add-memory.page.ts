import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Memory } from './Memory';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPageComponent {
  memory: Memory = {
    title:'',
    description: '',
    imageUrl: '',
    date: '',
  };

  currentDate: string;
  
  // imageUrl: string;

  constructor(public modalController: ModalController){
    this.currentDate = new Date().toISOString();
    // this.imageUrl = '';
   }

   onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result !== null) {
        this.memory.imageUrl = reader.result.toString();
      }
    };
  }

  save() {
    const dateObj = new Date();

    // mulitply timezone offset with 60000 to get offset in milliseconds
    const timezoneOffset = dateObj.getTimezoneOffset() * 60000;

    // subtract it from original date to get the local date and time
    const localDate = new Date(dateObj.getTime() - timezoneOffset);
    const formattedDate = localDate.toLocaleDateString(navigator.language, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const newMemory: Memory = {
      title: this.memory.title,
      description: this.memory.description,
      imageUrl: this.memory.imageUrl,
      date: formattedDate,
    };

    this.modalController.dismiss(newMemory);
  }

  cancel() {
    this.modalController.dismiss();
  }  
}
