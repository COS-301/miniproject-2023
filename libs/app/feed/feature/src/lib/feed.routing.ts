import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedPage,
  },
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('@mp/app/profile/feature').then((m) => m.ProfileModule),
  // },
  // {
  //   path: 'userprofile',
  //   loadChildren: () =>
  //     import('@mp/app/user-profile/feature').then((m) => m.UserProfileModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('@mp/app/settings/feature').then((m) => m.SettingsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRouting {}