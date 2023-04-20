import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRouting {}