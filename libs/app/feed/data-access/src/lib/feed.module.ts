import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mp/app/auth/data-access';
import { NgxsModule } from '@ngxs/store';
import { FeedState } from './feed.state';
import { FeedApi } from './feed.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([FeedState]), AuthModule],
  providers: [FeedApi],
})
export class FeedModule {}
