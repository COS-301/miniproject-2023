import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPageComponent } from './chat.page';

const routes: Routes = [
    {
        path: '',
        component: ChatPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatPageRoutingModule { }