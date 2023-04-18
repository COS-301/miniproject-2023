import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@mp/app/dashboard/feature').then((m) => m.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
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
        redirectTo: '/home/dashboard',
      },
      {
        path: 'post',
        loadChildren: () =>
          import('@mp/app/post/feature').then((m) => m.PostModule),
      },
      // {
      //   path: 'challenge',
      //   loadChildren: () =>
      //     import('@mp/app/challenge/feature').then((m) => m.ChallengeModule),
      // },
    ],
  },
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting { }