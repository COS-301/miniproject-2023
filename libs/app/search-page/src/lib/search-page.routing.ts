import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent,
    children: [
      {
        path: 'user-view',
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import('@mp/app/user-view').then((m) => m.UserViewModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRouting {}
