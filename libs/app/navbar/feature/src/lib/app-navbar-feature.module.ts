import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class AppNavbarFeatureModule {}
