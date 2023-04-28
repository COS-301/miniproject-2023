import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings.routing';

import { SettingsPage } from './settings.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingsPageRoutingModule, CopyrightModule],
  declarations: [SettingsPage],
})
export class SettingsModule {}
