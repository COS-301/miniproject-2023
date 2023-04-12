import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostDModule } from './post';
import { NgxsModule } from '@ngxs/store';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostDModule,
    NgxsModule,
    NgxsActionsExecutingModule,
  ],
  exports: [
    PostDModule,
  ],
})
export class PostModule {}
