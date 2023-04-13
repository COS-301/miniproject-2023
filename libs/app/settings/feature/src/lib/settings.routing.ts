import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPage } from './settings.page';

const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        component: SettingsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRouting {}