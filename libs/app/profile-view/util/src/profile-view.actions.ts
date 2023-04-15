import { IProfile } from "@mp/api/profiles/util";

export class GetProfileRequest {
    static readonly type = '[ProfileView] GetProfileRequest';
}

export class SetProfileView {
    static readonly type = '[ProfileView] SetProfileView';
    constructor(public readonly profile: IProfile) {}
}

export class GetCommentsRequest {
    static readonly type = '[ProfileView] GetCommentsRequest';
}

export class CreateCommentRequest {
    static readonly type = '[ProfileView] CreateCommentRequest';
}

export class UpdateCommentRequest {
    static readonly type = '[ProfileView] UpdateCommentRequest';
}