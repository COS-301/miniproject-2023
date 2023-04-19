import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChallengePageRoutingModule } from './challenge-routing.module';
import { ChallengePageComponent } from './challenge.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChallengePageRoutingModule],
  declarations: [ChallengePageComponent],
  exports: [ChallengePageComponent],
})
export class ChallengeModule {}
