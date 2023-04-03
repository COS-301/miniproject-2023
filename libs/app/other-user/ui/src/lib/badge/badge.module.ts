import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [BadgeComponent],
  exports: [BadgeComponent]
})
export class BadgeModule {}
