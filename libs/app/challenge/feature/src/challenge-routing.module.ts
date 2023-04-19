import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengePageComponent } from './challenge.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengePageRoutingModule { }
