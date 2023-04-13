import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeedOpenComponent } from './feed-open.component'

@NgModule({
    declarations: [FeedOpenComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [FeedOpenComponent]
})
export class FeedOpenModule {}
