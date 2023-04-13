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
          import('@mp/app/feed/feature').then((m) => m.FeedModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@mp/app/search/feature').then((m) => m.SearchModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@mp/app/settings/feature').then((m) => m.SettingsModule),
      },
      {
        path: 'create-post',
        loadChildren: () =>
          import('@mp/app/create-post/feature').then((m) => m.CreatePostModule),
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
