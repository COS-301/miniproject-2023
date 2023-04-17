import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [FooterComponent],
})
export class FooterModule {}
