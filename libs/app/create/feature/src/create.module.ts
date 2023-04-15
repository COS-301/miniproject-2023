import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePageRoutingModule } from './create.routing';
import { ProfileModule as ProfileUI} from '@mp/app/profile/ui';
import { ProfileModule as ProfileDataAccess} from '@mp/app/profile/data-access';
import { CreatePage } from './create.page';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
//import { PostState } from '@mp/app/postss/data-access';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    ProfileUI,
    ProfileDataAccess,
    ReactiveFormsModule, // Add this line back
    RouterModule.forChild([{ path: '', component: CreatePage }]), // Add this line back
  ],
  declarations: [CreatePage],
})
export class CreateModule {}
