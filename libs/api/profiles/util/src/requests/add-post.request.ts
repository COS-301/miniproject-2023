import { IProfile, IPostDetails } from '../interfaces';

export interface IAddPostRequest {
  profile: IProfile;
  post: IPostDetails;
}
