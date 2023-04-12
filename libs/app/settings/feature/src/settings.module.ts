import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings.page';
import { AccountSettingsPageComponent } from './Pages/account-settings/account-settings.page';
import { SecuritySettingsPageComponent } from './Pages/security-settings/security-settings.page';
import { PrivacySettingsPageComponent } from './Pages/privacy-settings/privacy-settings.page';
import { NotificationsSettingsPageComponent } from './Pages/notifications-settings/notifications-settings.page';
import { ThemeSettingsPageComponent } from './Pages/theme-settings/theme-settings.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingsPageRoutingModule],
  declarations: [
    SettingsPageComponent,
    AccountSettingsPageComponent,
    SecuritySettingsPageComponent,
    PrivacySettingsPageComponent,
    NotificationsSettingsPageComponent,
    ThemeSettingsPageComponent,
  ],
  exports: [
    SettingsPageComponent,
    AccountSettingsPageComponent,
    SecuritySettingsPageComponent,
    PrivacySettingsPageComponent,
    NotificationsSettingsPageComponent,
    ThemeSettingsPageComponent,
  ],
})
export class SettingsModule { }
