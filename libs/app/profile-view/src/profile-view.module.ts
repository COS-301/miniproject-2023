import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfileViewPageComponent } from './profile-view.page';
import { ProfileViewRouting } from './profile-view.routing';
import { AddMemoryPageComponent } from './lib/add-memory/add-memory.page';
import { FormsModule } from '@angular/forms';
import { ReviveMemoryPage } from './lib/revive-memory/revive-memory.page';

@NgModule({
  imports: [CommonModule, ProfileViewRouting, IonicModule, FormsModule],
  declarations: [
    ProfileViewPageComponent,
    AddMemoryPageComponent,
    AddMemoryPageComponent,
    ReviveMemoryPage,
  ],
  exports: [ProfileViewPageComponent, AddMemoryPageComponent, ReviveMemoryPage],
})
export class ProfileViewModule {}
