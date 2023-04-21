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
        path: 'inbox',
        loadChildren: () =>
          import('@mp/app/inbox/feature').then((m) => m.InboxModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('@mp/app/notifications/feature').then((m) => m.NotificationsModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@mp/app/search/feature').then((m) => m.SearchModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/feed',
      },
      {
        path: 'post',
        loadChildren: () =>
          import('@mp/app/post/feature').then((m) => m.PostModule),
      },
      {
        path: 'challenge',
        loadChildren: () =>
          import('@mp/app/challenge/feature').then((m) => m.ChallengeModule),
      },
      {
        path: 'userprofile',
        loadChildren: () =>
          import('@mp/app/user-profile/feature').then((m) => m.UserProfileModule),
      },
     
    ],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@mp/app/settings/feature').then((m) => m.SettingsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@mp/app/profile/feature').then((m) => m.ProfileModule),
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
export class HomeRouting { }