import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomePage,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@mp/app/login/feature').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@mp/app/register/feature').then((m) => m.RegisterModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRouting {}
