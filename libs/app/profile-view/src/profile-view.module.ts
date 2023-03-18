import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileViewPageComponent } from './profile-view.page';
import { ProfileViewRouting } from './profile-view.routing';

@NgModule({
  imports: [CommonModule, ProfileViewRouting, IonicModule],
  declarations: [ProfileViewPageComponent],
  exports: [ProfileViewPageComponent],
})
export class ProfileViewModule {}
