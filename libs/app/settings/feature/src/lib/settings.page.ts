import { Component } from '@angular/core';
//import {LocalStorageService} from ''

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {

  privacy = false;
  sliderValue = 50;

  constructor() { }

  onToggleChange(event) {
    // Handle toggle change
    console.log('Toggle changed', event.detail.checked);
  }

  onSliderChange(event) {
    // Handle slider change
    console.log('Slider changed', event.detail.value);
  }

  onSave() {
    // code to save settings
    // this.storage.set('option1', this.option1);
    // this.storage.set('option2', this.option2);
    // this.storage.set('sliderValue', this.sliderValue);

    console.log('Settings saved');
  }
}
