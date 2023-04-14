import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccountDetailsModule } from './account-details';
import { ProfileStatusModule } from './profile-status';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountDetailsModule,
    ProfileStatusModule,
  ],
  exports: [
    AccountDetailsModule,
    ProfileStatusModule,
  ],
})
export class ProfileModule { }
