import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post.page';

const routes: Routes = [
  {
    path: '',
    component: PostPageComponent
  },
  {
    path: 'challenge',
    loadChildren: () =>
      import('./challenges/challenges/challenges.module').then((m) => m.ChallengesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPageRoutingModule { }
