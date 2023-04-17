import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesPageComponent } from './challenges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengesRoutingModule
  ],
  declarations: [ChallengesPageComponent]
})
export class ChallengesModule { }