import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostModule as PostDataAccessModule } from '@mp/app/post/data-access';
//import { ProfileModule as ProfileUiModule } from '@mp/app/profile/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostPage } from './post.page';
import { PostRouting } from './post.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRouting,
    ReactiveFormsModule,
    PostDataAccessModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [PostPage],
})
export class PostModule {}