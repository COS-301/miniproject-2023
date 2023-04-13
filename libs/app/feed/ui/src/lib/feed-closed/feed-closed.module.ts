import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeedClosedComponent } from './feed-closed.component'


@NgModule({
    declarations: [FeedClosedComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [FeedClosedComponent]
})
export class FeedClosedModule {}
