import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { OtherUserState } from './other-user.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([OtherUserState])],
})
export class OtherUserModule {}
