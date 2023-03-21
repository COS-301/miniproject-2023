import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed.page';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FeedPageComponent,
  ],
  exports: [
    FeedPageComponent,
  ]
})
export class FeedModule {}
