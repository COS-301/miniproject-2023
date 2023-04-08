import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MeterComponent, MeterModule } from './meter';
import { BadgeComponent, BadgeModule } from './badge';
import { PostComponent, PostModule } from './post';
// import { ProfileModule } from '@mp/app/profile/data-access';
// import { FeedOpenModule, FeedOpenComponent } from './feed-open';
// import { FeedClosedModule, FeedClosedComponent } from './feed-closed';
@NgModule({
  imports: [CommonModule, IonicModule, MeterModule, BadgeModule, PostModule],
  declarations: [],
  exports: [MeterComponent, BadgeComponent, PostComponent],
})
export class OtherUserUIModule {}
