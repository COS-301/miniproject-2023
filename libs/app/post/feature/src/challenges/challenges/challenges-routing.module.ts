import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesPageComponent } from './challenges.page';

const routes: Routes = [
    {
        path: '',
        component: ChallengesPageComponent
    },
    {
        path: 'post',
        loadChildren: () =>
          import('../../post.module').then((m) => m.PostModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChallengesRoutingModule { }