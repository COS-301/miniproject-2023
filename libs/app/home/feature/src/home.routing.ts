import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import('@mp/app/feed').then((m) => m.FeedModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/feed',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/feed',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
