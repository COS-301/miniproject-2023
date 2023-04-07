import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FeedState } from './feed.state';
import { FeedApi } from './feed.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([FeedState])],
  providers: [FeedApi],
})
export class FeedModule {}
