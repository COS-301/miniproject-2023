import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessagesPage } from './messages.page';
import { MessagesRouting } from './messages.routing';

@NgModule({
  imports:[CommonModule, IonicModule, MessagesRouting],
  declarations: [MessagesPage],
})
export class MessagesModule{}