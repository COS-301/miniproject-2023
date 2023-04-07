import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FeedPage } from './feed.page';
import { FeedRouting } from './feed.routing';
import { FeedUIModule } from '@mp/app/feed/ui';
import { FooterModule } from '@mp/app/footer/feature';
import { NgxsModule } from '@ngxs/store';
import { FeedState } from '@mp/app/feed/data-access';


@NgModule({
  imports: [CommonModule, IonicModule, FeedRouting, FeedUIModule, FooterModule, NgxsModule.forFeature([FeedState])],
  declarations: [FeedPage],
  //exports: [FeedPage],
})
export class FeedModule {}
