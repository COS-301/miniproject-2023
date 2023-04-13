import { IProfile } from "./profile.interface";

export interface IRelationship {
    currentUser?: IProfile | null | undefined;
    otherUser?: IProfile | null | undefined;
  }
  