import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileViewPageComponent } from './profile-view.page';
import { ProfileViewRouting } from './profile-view.routing';
import { AddMemoryPageComponent } from './lib/add-memory/add-memory.page';
import { FormsModule } from '@angular/forms';
import { EditProfilePhotoPageComponent } from './lib/edit-profile-photo/edit-profile-photo.page';
import { ReviveMemoryPageComponent } from './lib/revive-memory/revive-memory.page';

@NgModule({
  imports: [CommonModule, ProfileViewRouting, IonicModule, FormsModule],
  declarations: [
    ProfileViewPageComponent,
    AddMemoryPageComponent,
    EditProfilePhotoPageComponent,
    ReviveMemoryPageComponent,
  ],
  exports: [
    ProfileViewPageComponent,
    AddMemoryPageComponent,
    EditProfilePhotoPageComponent,
    ReviveMemoryPageComponent,
  ],
})
export class ProfileViewModule {}
