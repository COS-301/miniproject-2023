import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private router: Router) { }


  ngOnInit() {}

  toProfilePage() {
    this.router.navigate(["/profile"]);
  }
}
