import { INewFollowerDetails } from "../interfaces";

export class TimeReceivedNotificationEvent {
    constructor(public readonly notification : INewFollowerDetails) {} 
}