import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreatePostPage } from './create-post.page';
import { CreatePostRouting } from './create-post.routing';

@NgModule({
  imports:[CommonModule, IonicModule, CreatePostRouting],
  declarations: [CreatePostPage],
})
export class CreatePostModule{}