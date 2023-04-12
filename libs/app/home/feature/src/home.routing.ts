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
        path: 'inbox/chats/:id', // Update the route for chat messages
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import('./../../../inbox/feature/src/pages/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('@mp/app/notifications/feature').then((m) => m.NotificationsModule),
      },
      {
        path: 'post',
        loadChildren: () =>
          import('@mp/app/post/feature').then((m) => m.PostModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/dashboard',
      },
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