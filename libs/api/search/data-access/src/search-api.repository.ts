import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import { UserList } from '@mp/api/search/util';
import { MinimizedProfile } from '@mp/api/search/util';
import { IUser } from '@mp/api/users/util';
import { Status } from '@mp/api/search/util';

@Injectable()
export class SearchRepository {

    async search(user : string){
        
        //mock data -> query db
        const profilesToReturn = {
            data: [
                {
                    imageURL: "user1profileimage.jpg",
                    username: "FloraEnthusiast"
                },
                {
                    imageURL: "user2profileimage.jpg",
                    username: "FaunaEnthusiast"
                }
            ]
        };
        
        return profilesToReturn;
    }

}
