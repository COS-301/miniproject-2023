import { Timestamp } from "firebase-admin/firestore";
import { IProfile } from "@mp/api/profiles/util";

export interface IMessageMetaData {
    timePosted : number/*Timestamp*/;
    sender : IProfile;
}
