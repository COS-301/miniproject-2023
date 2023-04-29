import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPostDetails, IProfile} from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { UpdateAccountDetails } from '@mp/app/profile/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, map } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { Logout } from '@mp/app/auth/util';


@Component({
  selector: 'ms-profile-posts-component',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss'],
})
export class ProfilePostsComponent {

posts$: Observable<IPostDetails[] | null | undefined>;
private profileSubscription!: Subscription;
  constructor(private readonly fb: FormBuilder,private store: Store, private router: Router) {
    this.posts$ = this.store.select(ProfileState.profile).pipe(
      map(profile => profile?.posts)
    );
    this.profileSubscription = this.profile$.subscribe((profile) => {
      if (profile && profile.time === 0) {
        // User's time reached 0, log them out
        this.store.dispatch(new Logout());
      }
    });
  }

  ngOnDestroy() {
    // Clean up the subscription when the component is destroyed
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
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

  // comment(postId: string| null| undefined, profileId: string|null|undefined) {


  //     /**
  //      * The reason for the snippet below is to get the post id and persist it to the comment page
  //      */
  //     const navigationExtras: NavigationExtras = {
  //       queryParams: {
  //         postValueId: postId,
  //         userValueId: profileId
  //       }
  //     };

  //     //The persisting happens here

  //     this.router.navigate(["/comment"], navigationExtras);
  //   }
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


  logout() {
    this.store.dispatch(new Logout());
  }

  updateAccountDetails() {
    this.store.dispatch(new UpdateAccountDetails());
  }
  toNotificationsPage() {
    this.router.navigate(["/notifications"]);
  }
  toSettingsPage() {
    this.router.navigate(["/settings"]);
  }
  getSlicedHashtag(hashtag: string): string {
    return hashtag.slice(1);
  }
}
