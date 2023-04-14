import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HomeApi } from './home.api';
import { HomeState } from './home.state';
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([HomeState])],
  providers: [HomeApi],
})
export class HomeModule {}
