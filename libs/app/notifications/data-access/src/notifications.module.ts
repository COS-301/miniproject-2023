import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NotificationsState } from './notifications.state';

@NgModule({
    imports: [CommonModule, NgxsModule.forFeature([NotificationsState])],
})
export class LoginModule { }
