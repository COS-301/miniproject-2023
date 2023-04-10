import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostDModule } from './post';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostDModule,
  ],
  exports: [
    PostDModule,
  ],
})
export class PostModule {}
