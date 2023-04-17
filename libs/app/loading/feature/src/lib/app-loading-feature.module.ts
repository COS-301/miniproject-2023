import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [CommonModule, IonicModule],
  declarations: [LoadingScreenComponent],
})
export class AppLoadingFeatureModule {}
