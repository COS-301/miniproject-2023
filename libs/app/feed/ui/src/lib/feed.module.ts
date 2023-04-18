import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent, CardModule } from './card';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CardModule,
  ],
  declarations: [],
  exports: [CardComponent]
})
export class FeedModule {}