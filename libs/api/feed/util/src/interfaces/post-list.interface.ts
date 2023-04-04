import { Post } from "./post.interface"

export interface PostList {
    postsFound : boolean;
    list : Post [] | null | undefined;
}