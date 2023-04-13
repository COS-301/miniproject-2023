import { NgModule } from '@angular/core';
import {
    AuthGuard,
    redirectLoggedInTo,
    redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectLoggedOut = () => redirectUnauthorizedTo(['']);
const redirectLoggedIn = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () =>
      import('@mp/app/welcome/feature').then((m) => m.WelcomeModule),
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
  // {
  //   path: 'home',
  //   //canActivate: [AuthGuard],
  //   //data: { authGuardPipe: redirectLoggedOut },
  //   loadChildren: () =>
  //     import('@mp/app/home/feature').then((m) => m.HomeModule),
  // },
  {
    path: 'tos',
    pathMatch: 'full',
    loadChildren: () => import('@mp/app/tos/feature').then((m) => m.TosModule),
  },
  {
    path: 'privacy',
    pathMatch: 'full',
    loadChildren: () =>
      import('@mp/app/privacy/feature').then((m) => m.PrivacyModule),
   },
  // {
  //   path: 'search',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import ('@mp/app/search/feature').then((m)=>m.SearchModule),
  // },
  // {
  //   path: 'feed',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import('@mp/app/feed/feature').then((m) => m.FeedModule),
  // },
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
  //     import('@mp/app/reset/feature').then((m) => m.ResetModule),
  // },
  {
    path: 'forgot',
    pathMatch: 'full',
    loadChildren: () =>
      import('@mp/app/forgot/feature').then((m) => m.ForgotModule),
  },
  {
    path: 'register',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () =>
      import('@mp/app/register/feature').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () =>
      import('@mp/app/login/feature').then((m) => m.LoginModule),
  },
  // {
  //   path: 'settings',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import ('@mp/app/settings/feature').then((m)=>m.SettingsModule),
  // },
  // {
  //   path: 'death-screen',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import ('@mp/app/death-screen/feature').then((m)=>m.DeathScreenModule),
  // },
  // {
  //   path: 'messages',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import ('@mp/app/messages/feature').then((m)=>m.MessagesModule),
  // },
  // {
  //   path: 'create-post',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { authGuardPipe: redirectLoggedIn },
  //   loadChildren: () =>
  //     import ('@mp/app/create-post/feature').then((m)=>m.CreatePostModule),
  // },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class CoreRouting {}
