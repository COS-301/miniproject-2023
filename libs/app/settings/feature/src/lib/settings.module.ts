import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
import { SettingsRouting } from './settings.routing';
import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';


@NgModule({
  imports:[CommonModule, IonicModule, IonicModule.forRoot(), SettingsRouting, FormsModule],
  declarations: [SettingsPage],
})
export class SettingsModule{}
