import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TimerComponent } from './timer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [TimerComponent],
})
export class TimerModule {}
