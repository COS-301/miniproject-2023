import {IUser} from '@mp/api/users/util';
import { Discipline } from "../enums/discipline.enum"

export interface Post {
    id : string;
    title : string;
    author : IUser;
    description : string;
    content : string;
    imageURL : string;
    discipline : Discipline;
    time : number;
}