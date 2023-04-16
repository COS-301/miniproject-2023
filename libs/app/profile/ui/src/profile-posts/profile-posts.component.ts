import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProfile} from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { UpdateAccountDetails, Logout } from '@mp/app/profile/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-posts-component',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss'],
})
export class ProfilePostsComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(actionsExecuting([UpdateAccountDetails]))
  busy$!: Observable<ActionsExecuting>;
  accountDetailsForm = this.fb.group({
    bio: ['']
  });
  showPassword = false;

  get bio() {
    return this.accountDetailsForm.get('bio');
  }


  // get ageError(): string {
  //   if (this.age?.errors?.['required']) return 'Age is required';
  //   if (this.age?.errors?.['minlength'])
  //     return 'Age should be longer than 4 characters';
  //   if (this.age?.errors?.['maxlength'])
  //     return 'Age should be shorter than 64 characters';

  //   return 'Age is invalid';
  // }

  // get genderError(): string {
  //   if (this.gender?.errors?.['required']) return 'Gender is required';
  //   if (this.gender?.errors?.['minlength'])
  //     return 'Gender should be longer than 4 characters';
  //   if (this.gender?.errors?.['maxlength'])
  //     return 'Gender should be shorter than 64 characters';

  //   return 'Gender is invalid';
  // }

  // get ethnicityError(): string {
  //   if (this.ethnicity?.errors?.['required']) return 'Ethnicity is required';
  //   if (this.ethnicity?.errors?.['minlength'])
  //     return 'Ethnicity should be longer than 4 characters';
  //   if (this.ethnicity?.errors?.['maxlength'])
  //     return 'Ethnicity should be shorter than 64 characters';

  //   return 'Ethnicity is invalid';
  // }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

  logout() {
    this.store.dispatch(new Logout());
  }

  updateAccountDetails() {
    this.store.dispatch(new UpdateAccountDetails());
  }
}
