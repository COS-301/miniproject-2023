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
        path: 'profile-view',
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import('@mp/app/profile-view').then((m) => m.ProfileViewModule),
      },
      {
        path: 'search-page',
        loadChildren: () =>
          import('@mp/app/search-page').then((m) => m.SearchPageModule),
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
