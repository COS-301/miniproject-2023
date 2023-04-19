import { INewFollowerNotification } from "../interfaces";

export class NewFollowerNotificationEvent {
    constructor(public readonly notification : INewFollowerNotification) {} 
}