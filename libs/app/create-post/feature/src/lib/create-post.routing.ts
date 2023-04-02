import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostPage } from './create-post.page';

const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        component: CreatePostPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreatePostRouting {}