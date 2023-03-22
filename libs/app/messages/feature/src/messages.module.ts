
import { ProfileModule } from '@mp/app/profile/data-access';
import { HomeRouting } from './messages.routing';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesPage } from './messages.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, HomeRouting],
  declarations: [MessagesPage],
  exports: [MessagesPage],
})
export class MessagesModule {}
