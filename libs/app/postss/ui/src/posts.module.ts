import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostModule } from './post';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostModule,
  ],
  exports: [
    PostModule,
  ],
})
export class PostsModule {}
