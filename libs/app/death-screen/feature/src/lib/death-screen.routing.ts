import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathScreenPage } from './death-screen.page';

const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        component: DeathScreenPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DeathScreenRouting {}