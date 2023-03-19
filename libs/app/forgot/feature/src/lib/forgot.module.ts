import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CopyrightModule } from '@mp/app/copyright/ui';
import { ForgotPasswordModule as ForgotPasswordDataAccessModule } from '@mp/app/forgot/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { ForgotPage } from './forgot.page';
// import { LoginRouting } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordDataAccessModule,
    NgxsFormPluginModule,
    CopyrightModule,
  ],
  declarations: [ForgotPage],
})
export class ForgotPasswordModule {}
