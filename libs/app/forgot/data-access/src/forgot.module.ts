import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ForgotState } from './forgot.state';

@NgModule({
    imports: [CommonModule, NgxsModule.forFeature([ForgotState])],
})

export class ForgotModule { }