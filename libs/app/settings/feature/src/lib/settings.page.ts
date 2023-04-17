import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {

  privacy = false;
  sliderValue = 50;
  public alertButtons = ['Yes', 'No'];

  constructor(public alertController: AlertController,  private location: Location) { }
  goBack() {
    this.location.back();
  }
  

  onToggleChange(event: any) {
    // Handle toggle change
    console.log('Toggle changed', event.detail.checked);
  }

  onSliderChange(event: any) {
    // Handle slider change
    console.log('Slider changed', event.detail.value);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: 'You are about to delete your account',
      message: 'Are you sure?',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  onSave() {
    // code to save settings
    // this.storage.set('option1', this.option1);
    // this.storage.set('option2', this.option2);
    // this.storage.set('sliderValue', this.sliderValue);

    console.log('Settings saved');
  }
}
