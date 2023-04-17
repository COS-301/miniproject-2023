import { IProfile, IPostDetails } from '@mp/api/profiles/util';

export class Logout {
  static readonly type = '[Profile] Logout';
}

export class SubscribeToProfile {
  static readonly type = '[Profile] SubscribeToProfile';
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
  constructor(public post: IPostDetails) {}
}

export class GetPostByUserId {
  static readonly type = '[Post] GetPostByUserID';
  constructor(public userId: string) {}
}