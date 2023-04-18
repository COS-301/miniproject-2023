import { IProfile, IPostDetails } from '@mp/api/profiles/util';

export class Logout {
  static readonly type = '[Profile] Logout';
}

export class SubscribeToProfile {
  static readonly type = '[Profile] SubscribeToProfile';
}

export class FetchUserPosts {
  static readonly type = '[Profile] Fetch User Posts';
  constructor(public displayName: string) {}
}

export class BuyPost{
  static readonly type = '[Profile] BuyPost';
  constructor(public post: IPostDetails) {}
}
export class GetAllPosts {
  static readonly type = '[Profile] Get All Posts';
  constructor(public userId: string) {}
}

export class GetUserPostsByHashtag {
  static readonly type = '[Profile] Get User Posts By Hashtag';
  constructor(public hashtag: string) {}
}

export class SetProfile {
  static readonly type = '[Profile] SetProfile';
  constructor(public readonly profile: IProfile | null) {}
}

export class UpdateAccountDetails {
  static readonly type = '[Profile] UpdateAccountDetails';
}

export class UpdateAddressDetails {
  static readonly type = '[Profile] UpdateAddressDetails';
}

export class UpdateContactDetails {
  static readonly type = '[Profile] UpdateContactDetails';
}

export class UpdateOccupationDetails {
  static readonly type = '[Profile] UpdateOccupationDetails';
}

export class UpdatePersonalDetails {
  static readonly type = '[Profile] UpdatePersonalDetails';
}

export class CreatePostDetails {
  static readonly type = '[Profile] CreatePostDetails';
}

export class AddPost {
  static readonly type = '[Profile] AddPost';
}

export class CreateNewPost {
  static readonly type = '[Profile] CreateNewPost';
   postDetail:IPostDetails|null=null;
  constructor(public post: IPostDetails) {
this.postDetail=post;
  }
getPost(){
return this.postDetail;
}
}
