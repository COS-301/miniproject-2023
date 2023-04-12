import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPageComponent } from './settings.page';
import { AccountSettingsPageComponent } from './Pages/account-settings/account-settings.page';
import { SecuritySettingsPageComponent } from './Pages/security-settings/security-settings.page';
import { PrivacySettingsPageComponent } from './Pages/privacy-settings/privacy-settings.page';
import { NotificationsSettingsPageComponent } from './Pages/notifications-settings/notifications-settings.page';
import { ThemeSettingsPageComponent } from './Pages/theme-settings/theme-settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPageComponent
  },
  {
    path: 'account-settings',
    component: AccountSettingsPageComponent
  },
  {
    path: 'security-settings',
    component: SecuritySettingsPageComponent
  },
  {
    path: 'privacy-settings',
    component: PrivacySettingsPageComponent
  },
  {
    path: 'notifications-settings',
    component: NotificationsSettingsPageComponent
  },
  {
    path: 'theme-settings',
    component: ThemeSettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule { }
