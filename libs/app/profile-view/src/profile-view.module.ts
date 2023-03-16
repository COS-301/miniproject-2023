import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileViewPage } from './profile-view.page';
import { ProfileViewRouting } from './profile-view.routing';

@NgModule({
  imports: [CommonModule, ProfileViewRouting, IonicModule],
  declarations: [ProfileViewPage],
  exports: [ProfileViewPage],
})
export class ProfileViewModule {}
