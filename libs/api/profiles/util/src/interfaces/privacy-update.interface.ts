import { IProfile } from "./profile.interface";
import { PrivacyStatus } from "../enums";

export interface IPrivacyUpdate {
    newStatus : PrivacyStatus;
    profile: IProfile;
}