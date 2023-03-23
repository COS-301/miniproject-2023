import {Timestamp} from 'firebase-admin/firestore';
import {IComment} from './comment.interface';

export interface IMemory{ 
    userId: string | null | undefined; 
    displayName: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined; 
    created?: Timestamp | null | undefined; 
    imgUrl : string | null |undefined; 
    alive : boolean | null | undefined;
    time: number | null | undefined;
    comments: IComment[] | null | undefined;
}

