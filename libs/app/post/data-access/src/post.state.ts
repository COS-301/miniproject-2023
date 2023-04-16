import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import {
  IPost, IComment, Hashtag, ICreatePostRequest
} from "@mp/api/postss/util";
import { PostApi } from "./post.api";
import produce from "immer";
import { SetError } from "@mp/app/errors/util";
import { Timestamp } from "firebase-admin/firestore";
import { SetPost, CreatePost } from "@mp/app/post/util";
export interface PostStateModel {
  post: IPost | null;
  postDetailsForm: {
    model: {
      postID: string | null | undefined;
      createdBy: string | null | undefined;
      ownedBy: string | null | undefined;
      likes: number | null | undefined;
      comments: IComment[] | null | undefined;
      createdAt?: Timestamp | null | undefined;
      content?: string | null | undefined;
      hashtag?: Hashtag | null | undefined;
      caption?: string | null | undefined;
      totalTime?: number | null | undefined;
      ownerGainedTime?: number | null | undefined;
      listing?: number | null | undefined;
    };
    dirty: false;
    status: string;
    errors: object;
  };
}
@State<PostStateModel>({
  name: 'post',
  defaults: {
    post: null,
    postDetailsForm: {
      model: {
        postID: null,
        createdBy: null,
        ownedBy: null,
        likes: null, //fixed like left out  before
        comments: null,
        createdAt: null,
        content: null,
        hashtag: null,
        caption: null,
        totalTime: null,
        ownerGainedTime: null,
        listing: null,
      },
      dirty: false,
      status: '',
      errors: {},
    }
  }
})

@Injectable()
export class PostState { /* changed from 'PostsState' to 'PostState' */
  constructor(
    private readonly postApi: PostApi,
    private readonly store: Store
  ) {}

  @Selector()
  static post(state: PostStateModel) {
    return state.post;
  }

  @Action(SetPost)
  setPost(ctx: StateContext<PostStateModel>, { post }: SetPost) {
    return ctx.setState(
      produce((draft) => {
        draft.post = post;
      })
    );
  }

  @Action(CreatePost)
  async createPost(ctx: StateContext<PostStateModel>) {
    try {
      const state = ctx.getState();
      const createdBy = state.postDetailsForm.model.createdBy;
      const content = state.postDetailsForm.model.content;
      const caption = state.postDetailsForm.model.caption;
      const hashtag = state.postDetailsForm.model.hashtag;
      const ownedBy = state.postDetailsForm.model.createdBy; // We can use 'createdBy' from the action payload
      const postID = state.postDetailsForm.model.createdBy + "1";
      const likes = 0;
      const createdAt = Timestamp.now();

      if (!createdBy || !content || !caption || !hashtag)
        return ctx.dispatch(
          new SetError(
            'UserId or contant or caption not set'
          )
        );

      const request: ICreatePostRequest = {
        post: {
          postID,
          createdBy,
          ownedBy,
          likes,
          createdAt,
          content,
          hashtag,
          caption,
        },
      };
      const responseRef = await this.postApi.createPost(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetPost(response.post));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
}