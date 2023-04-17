import { IProfile } from "./profile.interface";

export interface IPasswordSettings {
    oldpassword?: string | null | undefined;
    newpassword?: string | null | undefined;
    verifynewpassword?: string | null | undefined;
    profile: IProfile;
}