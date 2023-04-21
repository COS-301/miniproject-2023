import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePageComponent } from './user-profile.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, UserProfilePageRoutingModule],
  declarations: [UserProfilePageComponent],
  exports: [UserProfilePageComponent],
})
export class UserProfileModule {}
