// Need to remove this later to avoid duplicate code - already defined in Luke's code

import { Post } from "./post.interface";

export interface IPostList {
    postsFound: boolean;
    list: Post[] | null | undefined;
}