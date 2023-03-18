import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewPageComponent } from './profile-view.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileViewPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileViewRouting {}
