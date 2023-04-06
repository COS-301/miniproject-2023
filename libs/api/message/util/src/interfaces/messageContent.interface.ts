export interface IMessageContent {
    textData: string;
    video?: string | null | undefined; // TODO find datatype to replace video data with.
    photo?: string | null | undefined; // TODO find datatype to replace video data with.
}
