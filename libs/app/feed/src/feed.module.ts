import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed.page';
import { FeedRouting } from './feed.routing';

@NgModule({
  imports: [CommonModule, FeedRouting],
  declarations: [
    FeedPageComponent,
  ],
  exports: [
    FeedPageComponent,
  ]
})
export class FeedModule {}
