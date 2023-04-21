import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { AboutPage } from './about.page';
import { AboutRouting } from './about.routing';

@NgModule({
  imports: [CommonModule, IonicModule, AboutRouting, CopyrightModule],
  declarations: [AboutPage],
})
export class AboutModule {}
