import { Post as IPost, Discipline } from '@mp/api/feed/util'; 
import {IUser} from '@mp/api/users/util';
import {AggregateRoot} from '@nestjs/cqrs';

export class Post extends AggregateRoot implements IPost {
    constructor(
        public id: string,
        public title: string,
        public author: IUser,
        public description: string,
        public content: string,
        public discipline: Discipline,
        public time: number
    ) {
        super();
    }

    static fromData(post: IPost): Post {
        const instance = new Post(
            post.id,
            post.title,
            post.author,
            post.description,
            post.content,
            post.discipline,
            post.time
        );
        return instance;
    }

    create() {
        this.apply();
    }
}