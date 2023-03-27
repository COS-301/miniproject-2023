import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
import { SettingsRouting } from './settings.routing';

@NgModule({
  imports:[CommonModule, IonicModule, SettingsRouting],
  declarations: [SettingsPage],
})
export class SettingsModule{}
