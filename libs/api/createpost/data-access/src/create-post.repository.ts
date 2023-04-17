import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Post } from '@mp/api/createpost/util';
import { Discipline } from '@mp/api/createpost/util';
import { IUser } from '@mp/api/users/util';
import { Status } from '@mp/api/createpost/util';

@Injectable()
export class CreatePostRepository {

     async createPost(post : Post){
        // Query the database to add post to the user profile

        return Status.SUCCESS
    }
}