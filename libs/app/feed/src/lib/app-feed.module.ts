import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { appFeedRoutes } from './lib.routes';
import { FeedContentPage } from './feed/feed-content.page';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedContentPage],
  exports: [FeedContentPage],
})
export class AppFeedModule {}
