import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPostDetails, IProfile} from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { UpdateAccountDetails, SetPhoto } from '@mp/app/profile/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, map } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';import { Logout } from '@mp/app/auth/util';


@Component({
  selector: 'ms-profile-posts-component',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss'],
})
export class ProfilePostsComponent {

posts$: Observable<IPostDetails[] | null | undefined>;
profileId: string | null = null;
private profileSubscription!: Subscription;
  constructor(private readonly fb: FormBuilder,private store: Store, private router: Router,private storage: AngularFireStorage) {
    this.posts$ = this.store.select(ProfileState.profile).pipe(
      tap(profile => {
        if (profile) {
          this.profileId = profile.userId;
        }
      }),
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
    bio: [''],
    urlPhoto:''
  });
  showPassword = false;

  get bio() {
    return this.accountDetailsForm.get('bio');
  }


  // Store the selected avatar
selectedAvatar = '';


selectAvatar(avatar: string): void {
  if(this.selectedAvatar != ''){
    const parts1 = this.selectedAvatar.split(".");
    const index1 = parseInt(parts1[0]);
    const oldAvatar = document.getElementsByClassName('avatarPic')[index1-1] as HTMLElement;
    oldAvatar.style.border = 'none';
  }
  this.selectedAvatar = avatar;
  console.log(this.selectedAvatar);
  const parts = avatar.split(".");
  const index = parseInt(parts[0]);

  const selectedAvatar = document.getElementsByClassName('avatarPic')[index-1] as HTMLElement;
  selectedAvatar.style.border = '3px solid var(--branding-light-green)';
  selectedAvatar.animate([
    { transform: 'scale(1)', boxShadow: 'none' },
    { transform: 'scale(1.1)', boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)' },
    { transform: 'scale(1)', boxShadow: 'none' }
  ], {
    duration: 500,
    easing: 'ease-in-out'
  });
}


async confirmAvatar(): Promise<string>{
  let url='';
  if(this.selectedAvatar == ''){
    return '';
  }else{
    // const existingAvatar = "assets/avatars/"+this.selectedAvatar;
    // const newAvatar = "assets/selectedAvatars/" + this.profileId + ".jpg";
    // console.log("existingAvatar: " + existingAvatar);
    // console.log("newAvatar: " + newAvatar);

    //TODO: copy existingAvatar into newAvatar location
    url = await this.uploadAvatarAndReturnUrl(this.selectedAvatar);
    this.store.dispatch(new SetPhoto(url));
    console.log(url);
  }

  //hide menu
  const avatarMenu = document.getElementById('avatar-menu');
  if(avatarMenu != null){

    avatarMenu.style.display = 'none';
  }
  return url;
}

cancelAvatar(): void {
  // Hide the avatar selection menu
  const avatarMenu = document.getElementById('avatar-menu');
  if(avatarMenu != null){

    avatarMenu.style.display = 'none';
  }
}

showAvatarMenu(): void {

  const avatarMenu = document.getElementById('avatar-menu');
  if(avatarMenu != null){
    avatarMenu.style.display = 'block';
  }

}

async uploadAvatarAndReturnUrl(fileNum: string): Promise<string> {
  let profileName: string | null | undefined = null;

  // Get the current value of the profile$ observable
  await this.profile$.pipe(take(1)).toPromise().then((profile) => {
    if (profile) {
      profileName = profile?.accountDetails?.displayName;
    }
  });

  if (!profileName) {
    throw new Error('Profile displayName not found');
  }
  const filePath = `avatars/${profileName}.jpg`;
  const fileRef = this.storage.ref(filePath);

  const fileToUploadPath=`assets/avatars/${fileNum}`;
  const response = await fetch(fileToUploadPath);
  const blob = await response.blob();

  const task = this.storage.upload(filePath, blob);

  // Log the upload progress percentage
  task.percentageChanges().subscribe(progress => {
    console.log(`Upload progress: ${progress}%`);
  });

  return new Promise((resolve, reject) => {
    task.then(async () => {
      try {
        const url = await fileRef.getDownloadURL().toPromise();
        resolve(url);
      } catch (error) {
        console.error('Error getting download URL:', error);
        reject(error);
      }
    }).catch(error => {
      console.error('Error uploading file:', error);
      reject(error);
    });
  });
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

  toSearch(searchFor: string | null | undefined) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        searchFor: searchFor
      }
    };

    this.router.navigate(["/search"], navigationExtras);
  }
}
