import { FriendsService } from "@mp/api/friends/feature";
import { NestFactory} from "@nestjs/core"
import * as functions from "firebase-functions"
import { CoreModule } from "../core.module";
import { GetFriendsRequest, GetFriendsResponse } from "@mp/api/friends/util";
import { RemoveFriendRequest, RemoveFriendResponse } from "@mp/api/friends/util";

export const getFriends = functions.https.onCall(
    async (
        request : GetFriendsRequest
    ): Promise<GetFriendsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(FriendsService, {strict: false});
    return service.getFriends(request);
    }
);

export const removeFriend = functions.https.onCall(
    async (
        request : RemoveFriendRequest
    ): Promise<RemoveFriendResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(FriendsService, {strict: false});
        return service.removeFriend(request);
    }
);