import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mp/app/auth/data-access';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './post.state';
import { PostApi } from './post.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PostsState]), AuthModule],
  providers: [PostApi],
})
export class PostModule {}
