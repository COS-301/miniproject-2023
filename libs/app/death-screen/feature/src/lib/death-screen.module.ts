import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DeathScreenPage } from './death-screen.component';
import { DeathScreenRouting } from './death-screen.routing';

@NgModule({
  imports:[CommonModule, IonicModule, DeathScreenRouting],
  declarations: [DeathScreenPage],
})
export class DeathScreenModule{}