import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TimeBadgeComponent } from './time-badge.component';

@NgModule({
  declarations: [TimeBadgeComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    ProfileModule,
  ],
  exports: [TimeBadgeComponent],
})
export class TimeBadgeModule {}
