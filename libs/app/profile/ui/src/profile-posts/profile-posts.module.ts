import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProfilePostsComponent } from './profile-posts.component';

@NgModule({
  declarations: [ProfilePostsComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    ProfileModule,
  ],
  exports: [ProfilePostsComponent],
})
export class ProfilePostsModule {}
