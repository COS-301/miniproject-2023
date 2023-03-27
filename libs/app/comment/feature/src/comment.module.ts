import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentPageRoutingModule } from './comment.routing';

import { CommentPage } from './comment.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CommentPageRoutingModule],
  declarations: [CommentPage],
})
export class CommentModule {}
