import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { FeedOpenModule, FeedOpenComponent } from './feed-open';
import { FeedClosedModule, FeedClosedComponent } from './feed-closed';
@NgModule({
  imports: [CommonModule, IonicModule, ProfileModule, FeedOpenModule, FeedClosedModule],
  declarations: [],
  exports: [FeedOpenComponent, FeedClosedComponent],
})
export class FeedUIModule {}
