import { IProfile } from "@mp/api/profiles/util";
import { Timestamp } from 'firebase-admin/firestore';

export interface IMessageMetaData {
    timePosted : Timestamp;
    sender : IProfile;
}
