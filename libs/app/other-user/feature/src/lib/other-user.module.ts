import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OtherUserPage } from './other-user.page';
import { OtherUserRouting } from './other-user.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    OtherUserRouting
  ],
  declarations: [OtherUserPage],
})
export class OtherUserModule {}
