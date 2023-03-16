import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewPage } from './profile-view.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileViewPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileViewRouting {}
