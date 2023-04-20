import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccountDetailsModule } from './account-details';
//import { AddressDetailsModule } from './address-details';
import { ContactDetailsModule } from './contact-details';
import { OccupationDetailsModule } from './occupation-details';
import { PersonalDetailsModule } from './personal-details';
import { PostDetailsModule } from './post-details';
import { ProfileStatusModule } from './profile-status';
import { ProfilePostsModule } from './profile-posts';
import { TimeBadgeModule } from './time-badge';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountDetailsModule,
    //AddressDetailsModule,
    ContactDetailsModule,
    OccupationDetailsModule,
    PersonalDetailsModule,
    PostDetailsModule,
    ProfileStatusModule,
    ProfilePostsModule,
    TimeBadgeModule
  ],
  exports: [
    AccountDetailsModule,
    //AddressDetailsModule,
    ContactDetailsModule,
    OccupationDetailsModule,
    PersonalDetailsModule,
    ProfileStatusModule,
    PostDetailsModule,
    ProfilePostsModule,
    TimeBadgeModule
  ],
})
export class ProfileModule {}
