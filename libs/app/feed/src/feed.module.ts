import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed.page';
import { FeedRouting } from './feed.routing';

@NgModule({
  imports: [CommonModule, IonicModule, FeedRouting],
  declarations: [
    FeedPageComponent,
  ],
  exports: [
    FeedPageComponent,
  ]
})
export class FeedModule {}
