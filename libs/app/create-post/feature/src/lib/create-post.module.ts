import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreatePostPage } from './create-post.page';
import { CreatePostRouting } from './create-post.routing';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:[CommonModule, IonicModule, CreatePostRouting,HttpClientModule,FormsModule],
  declarations: [CreatePostPage],
  providers: [PostService]
})
export class CreatePostModule{}