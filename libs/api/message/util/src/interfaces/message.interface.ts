import {IMessageContent} from "./messageContent.interface";
import {IMessageMetaData} from "./messageMetaData.interface";

export interface IMessage {
    id? : string | null | undefined;
    content : IMessageContent;
    metaData : IMessageMetaData;
}
