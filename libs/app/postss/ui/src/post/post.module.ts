import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostComponent } from './post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, IonicModule, RouterModule, NgxSkeletonLoaderModule, ReactiveFormsModule],
  exports: [PostComponent],
})
export class PostDModule {}
