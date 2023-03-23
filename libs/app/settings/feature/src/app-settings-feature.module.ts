import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { SettingsPage } from './app-settings-feature.page';
import { SettingsPageRoutingModule } from './app-settings-feature.routing';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage],
  exports: [SettingsPage]

})
export class SettingsPageModule {}
