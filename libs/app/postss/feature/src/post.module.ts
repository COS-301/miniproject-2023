import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Change this line
import { IonicModule } from '@ionic/angular';
import { PostModule as PostDataAccessModule } from '@mp/app/postss/data-access';
import { PostModule as PostUiModule } from '@mp/app/postss/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostPage } from './post.page';
import { PostRouting } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // Change this line
    IonicModule,
    PostRouting,
    PostUiModule,
    PostDataAccessModule,
    NgxSkeletonLoaderModule,
  ],
//exports:[PostUiModule],
  declarations: [PostPage],
})
export class PostFeatureModule {}
