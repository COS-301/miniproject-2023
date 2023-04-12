import { followerDetails } from "../interfaces";

export class TimeReceivedNotificationEvent {
    constructor(public readonly notification : followerDetails) {}
}
