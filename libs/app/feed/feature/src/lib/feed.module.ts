import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPage } from './feed.page';
import { IonicModule } from '@ionic/angular';
import { FeedRouting } from './feed.routing';
import { FeedModule as CardModule } from '@mp/app/feed/ui';
//import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [CommonModule, IonicModule, FeedRouting, CardModule],
  declarations: [FeedPage]
})
export class FeedModule {}