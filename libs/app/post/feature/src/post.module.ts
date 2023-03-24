import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostModule as PostDataAccessModule } from '@mp/app/post/data-access';
import { PostModule as PostUiModule } from '@mp/app/post/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostPage } from './post.page';
import { PostRouting } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRouting,
    PostUiModule,
    PostDataAccessModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [PostPage],
})
export class PostModule {}
