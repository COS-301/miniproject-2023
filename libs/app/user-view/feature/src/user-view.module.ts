import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewPageComponent } from './user-view.page';
import { UserViewRouting } from './user-view.routing';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@mp/app/shared/feature';

@NgModule({
  imports: [CommonModule, UserViewRouting, IonicModule, SharedModule],
  declarations: [UserViewPageComponent],
})
export class UserViewModule {}
