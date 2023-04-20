import { IComment, IProfile} from '../interfaces';

export interface ICommentOnPostResponse {
    profile?: IProfile,
    comment?: IComment
  }