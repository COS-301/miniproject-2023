import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewPageComponent } from './user-view.page';
import { UserViewRouting } from './user-view.routing';

@NgModule({
  imports: [
    CommonModule,
    UserViewRouting
  ],
  declarations: [UserViewPageComponent],
})
export class UserViewModule {}
