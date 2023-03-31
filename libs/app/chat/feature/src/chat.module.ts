import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat.page';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatPageComponent],
  exports: [ChatPageComponent],
})
export class ChatModule { }
