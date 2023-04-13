import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {

  privacy = false;
  sliderValue = 50;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  onToggleChange(event: { detail: { checked: any; }; }) {
    // Handle toggle change
    console.log('Toggle changed', event.detail.checked);
  }

  onSliderChange(event: { detail: { value: any; }; }) {
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
