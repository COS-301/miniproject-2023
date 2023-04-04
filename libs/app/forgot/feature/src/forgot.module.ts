import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { ForgotModule as ForgotDataAccessModule } from '@mp/app/forgot/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { ForgotPage } from './forgot.page';
import { ForgotRouting } from './forgot.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        ForgotDataAccessModule,
        NgxsFormPluginModule,
        ForgotRouting,
        CopyrightModule
    ],
    declarations: [ForgotPage],
})

export class ForgotModule { }