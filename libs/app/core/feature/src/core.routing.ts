import { NgModule } from '@angular/core';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectLoggedOut = () => redirectUnauthorizedTo(['']);
const redirectLoggedIn = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('@mp/app/welcome/feature').then((m) => m.WelcomeModule),
  },
  // {
  //   path: 'response',
  //   loadChildren: () =>
  //     import('./response/response.module').then((m) => m.ResponsePageModule),
  // },
  // {
  //   path: 'responses',
  //   loadChildren: () =>
  //     import('./responses/responses.module').then((m) => m.ResponsesPageModule),
  // },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('@mp/app/home/feature').then((m) => m.HomeModule),
  },
  {
    path: 'tos',
    loadChildren: () => import('@mp/app/tos/feature').then((m) => m.TosModule),
  },
  {
    path: 'privacy',
    loadChildren: () => import('@mp/app/privacy/feature').then((m) => m.PrivacyModule),
  },
  // {
  //   path: 'verify',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import('./verify/verify.module').then((m) => m.VerifyPageModule),
  // },
  // {
  //   path: 'reset',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import('./reset/reset.module').then((m) => m.ResetPageModule),
  // },
  {
    path: 'forgot',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('@mp/app/forgot/feature').then((m) => m.ForgotPasswordModule),
  },
  {
    path: 'register',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('@mp/app/register/feature').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('@mp/app/login/feature').then((m) => m.LoginModule),
  },
  {
    path: 'user-view',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@mp/app/user-view').then((m) => m.UserViewModule),
  },
  {
    path: 'search-results',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@mp/app/search-results').then((m) => m.SearchResultsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class CoreRouting {}
