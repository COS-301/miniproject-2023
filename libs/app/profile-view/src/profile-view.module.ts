import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileViewPageComponent } from './profile-view.page';
import { ProfileViewRouting } from './profile-view.routing';
import { AddMemoryPageComponent } from './lib/add-memory/add-memory.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ProfileViewRouting, IonicModule, FormsModule],
  declarations: [
    ProfileViewPageComponent,
    AddMemoryPageComponent,
    AddMemoryPageComponent,
  ],
  exports: [ProfileViewPageComponent, AddMemoryPageComponent],
})
export class ProfileViewModule {}
