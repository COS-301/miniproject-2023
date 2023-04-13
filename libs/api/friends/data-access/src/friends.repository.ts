import { Module } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin"

import { Status } from "@mp/api/friends/util";
import { FriendsList } from "@mp/api/friends/util";
import { MinimisedProfile } from "@mp/api/friends/util";
import {IUser} from '@mp/api/users/util';

@Injectable()
export class FriendsRepository {
    async getFriends( profile : MinimisedProfile){
        const toReturn = {
            data : [
                {
                    id : "friend_1",
                    username : "Fire Lord Edwin"
                    //image : link i presume 
                }, 
                {
                    id : "friend_2",
                    username : "MadKea"
                    //image : link i presume
                },
                {
                    id : "friend_3",
                    username : "Lucky Luke"
                    //image : link i presume
                }
            ]
        };

        return toReturn;
    }

   async removeFriend( user : IUser, profile : MinimisedProfile){
    return Status.SUCCESS
   }
}