import { Discipline } from "../enums/discipline.enum"
import {IUser} from '@mp/api/users/util'; // use existing IUser interface

export interface Post {
    id : string;
    title : string;
    author : IUser | null;
    description : string;
    content : string;
    discipline : Discipline;
    time : number;
    // image : reference to an image stored elsewhere in the database; - not sure yet how this will be stored in the db yet

}