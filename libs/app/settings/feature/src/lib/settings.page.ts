import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  constructor (public r : Router)
  {}

  LoadAccountPage()
  {
    this.r.navigate(['/account']);
  }
}
