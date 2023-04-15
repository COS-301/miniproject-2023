import { IProfile } from "@mp/api/profiles/util";

export class GetProfileRequest {
    static readonly type = '[ProfileView] GetProfileRequest';
}

export class SetProfileView {
    static readonly type = '[ProfileView] SetProfileView';
    constructor(public readonly profile: IProfile) {}
}