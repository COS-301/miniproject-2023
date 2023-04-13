import {IUser} from '@mp/api/users/util';
import { MinimisedProfile } from '../interfaces/minimised-profile.interface';

export interface RemoveFriendRequest {
    user : IUser;
    removedfriend: MinimisedProfile;

}