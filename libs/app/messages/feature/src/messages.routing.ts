import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage,
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
export class HomeRouting {}
