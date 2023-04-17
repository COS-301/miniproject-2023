import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashPage } from './splash.page';
import { SplashRouting } from './splash.routing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SplashRouting,
  ],
  declarations: [SplashPage],
})
export class SplashModule {}
