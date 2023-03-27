import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FeedPage } from './feed.page';
import { FeedRouting } from './feed.routing';
import { FeedUIModule } from '@mp/app/feed/ui';


@NgModule({
  imports: [CommonModule, IonicModule, FeedRouting, FeedUIModule],
  declarations: [FeedPage],
  //exports: [FeedPage],
})
export class FeedModule {}
