import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {

  privacy = false;
  notification = true;

  constructor() {
    //code to do whatever
  }

  ngOnInit() {
    // code to initialize settings
  }

  onSave() {
    // code to save settings
  }
}
