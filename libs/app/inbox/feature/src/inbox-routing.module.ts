import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxPageComponent } from './inbox.page';

const routes: Routes = [
    {
        path: '',
        component: InboxPageComponent
    },
    {
        path: 'chats/:id',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)
    },/*
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InboxPageRoutingModule { }
