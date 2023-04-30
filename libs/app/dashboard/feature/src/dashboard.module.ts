import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileModule as PUI } from '@mp/app/profile/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import{ ProfileModule as PDA}from'@mp/app/profile/data-access';
import { DashboardPage } from './dashboard.page';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardRouting,
    PUI,
    PDA,
    NgxSkeletonLoaderModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardModule {}
