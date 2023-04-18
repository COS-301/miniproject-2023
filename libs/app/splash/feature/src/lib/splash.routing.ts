import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPage } from './splash.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SplashPage,
    children: [
    {
      path: 'welcome',
      loadChildren: () =>
        import('@mp/app/welcome/feature').then((m) => m.WelcomeModule),
    },
   ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashRouting {}
