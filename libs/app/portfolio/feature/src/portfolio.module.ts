import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioPageRoutingModule } from './portfolio.routing';

import { PortfolioPage } from './portfolio.page';

import { ProfileModule } from '@mp/app/profile/data-access';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioPageRoutingModule,
    ProfileModule,
  ],
  declarations: [PortfolioPage],
})
export class PortfolioModule { }
