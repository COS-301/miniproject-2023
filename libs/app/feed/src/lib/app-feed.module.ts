import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { appFeedRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule],
})
export class AppFeedModule {}
