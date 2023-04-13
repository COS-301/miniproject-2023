import { MinimisedProfile } from "./minimised-profile.interface";

export interface FriendsList {
    friendFound : boolean;
    list : MinimisedProfile [] | null | undefined;
}