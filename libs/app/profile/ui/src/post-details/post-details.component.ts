import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProfile, IPostDetails, stringToHashtag } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { AddPost, CreatePostDetails, CreateNewPost } from '@mp/app/profile/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-post-details-component',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(actionsExecuting([CreatePostDetails]))
  busy$!: Observable<ActionsExecuting>;
  postDetailsForm = this.fb.group({
    content: [''],
    caption: ['', [Validators.minLength(4), Validators.maxLength(64)]],
    hashtag: ['', [Validators.minLength(4), Validators.maxLength(64)]],
    listing: [0]
  });
  showPassword = false;

  get content() {
    console.debug(this.postDetailsForm.get('content')?.value?.split(",")[1].slice(0,10));
    return this.postDetailsForm.get('content');
  }

  get caption() {
    return this.postDetailsForm.get('caption');
  }

  get hashtag() {
    return this.postDetailsForm.get('hashtag');
  }

  createNewPost() {
    console.log("Trying to create");
    if (this.postDetailsForm.invalid) {
      console.log("Invalid");
      return;
    }

    const strCon = this.postDetailsForm.get('content')?.value?.split(",")[1].slice(0,10);
    console.log("Content " + strCon);
    const postDetails: IPostDetails = {
      content: strCon,
      caption: this.postDetailsForm.get('caption')?.value,
      hashtag: stringToHashtag(this.postDetailsForm.get('hashtag')?.value),
      listing: this.postDetailsForm.get('listing')?.value
    };
    this.store.dispatch(new CreateNewPost(postDetails));
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {    
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.postDetailsForm?.get('content')?.setValue(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }
  
  setHashtag(hashtag: string) {
    this.postDetailsForm?.get('hashtag')?.setValue(hashtag);
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

  createPostDetails() {
    console.log("here in component");
    this.store.dispatch(new CreatePostDetails());
  }
  
  setInsertionPoint(){
    const x = document.getElementById("numberInput") as HTMLIonInputElement;

    x.setFocus();
  }
}
