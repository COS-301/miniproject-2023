import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
import { SettingsRouting } from './settings.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[CommonModule, IonicModule, SettingsRouting, FormsModule],
  declarations: [SettingsPage],
})
export class SettingsModule{}
