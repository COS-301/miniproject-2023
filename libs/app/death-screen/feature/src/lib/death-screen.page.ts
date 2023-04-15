import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'mp-death-screen',
  templateUrl: './death-screen.page.html',
  styleUrls: ['./death-screen.page.scss']
})
export class DeathScreenPage {
  constructor(private modalCtrl: ModalController) { }

  onRetry() {
    // Handle retry button click
    // You can implement custom logic here
    console.log('Buy more time clicked');
  }

  onExit() {
    // Handle exit button click
    // You can implement custom logic here
    console.log('Exit clicked');
  }

  onShare() {
    // Handle share button click
    // You can implement custom logic here
    console.log('Watch an Ad clicked');
  }
}
