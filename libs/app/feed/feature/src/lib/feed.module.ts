import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FeedPage } from './feed.page';
import { FeedRouting } from './feed.routing';
import { FeedUIModule } from '@mp/app/feed/ui';
import { NgxsModule } from '@ngxs/store';
import { FeedApi, FeedState } from '@mp/app/feed/data-access';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { SetPostList } from '@mp/app/feed/util';

@NgModule({
  imports: [CommonModule, IonicModule, FeedRouting, FeedUIModule, NgxsModule.forFeature([FeedState])],
  declarations: [FeedPage],
  providers: [FeedApi],
  //exports: [FeedPage],
})
export class FeedModule { }
