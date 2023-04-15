import { State, Action, StateContext } from '@ngxs/store';
import { CreatePost, CreatePostSuccess, CreatePostFailure } from '@mp/app/create-post/util';
import { IUser } from '@mp/api/users/util';
import { Discipline } from '@mp/api/feed/util';
/*export interface CreatePostStateModel {
  Post: {
    model: {
      id : string | null;
      title : string | null;
      author : IUser | null;
      description : string | null;
      content : string | null;
      discipline : Discipline | null;
      time : number | null;
    };
    dirty: false;
    status: string;
    errors: object;
}*/

export interface CreatePostStateModel {
  postId: number | null;
  error: string | null;
}

@State<CreatePostStateModel>({
  name: 'createPost',
  defaults: {
    postId: null,
    error: null
  }
})
export class CreatePostState {

  @Action(CreatePost)
  createPost(ctx: StateContext<CreatePostStateModel>, action: CreatePost) {
    try {
      // Dispatch an API request to create a post with the given post data and file
      const response = await this.postService.createPost(action.post, action.file);

      if (response.success) {
        // Update state with the post ID on success
        ctx.dispatch(new CreatePostSuccess(response.postId));
      } else {
        // Update state with the error message on failure
        ctx.dispatch(new CreatePostFailure(response.error));
      }
    } catch (error) {
      // Handle error and update state accordingly
      ctx.dispatch(new CreatePostFailure(error.message));
    }
  }
  }

  @Action(CreatePostSuccess)
  createPostSuccess(ctx: StateContext<CreatePostStateModel>, action: CreatePostSuccess) {
    ctx.patchState({ postId: action.postId, error: null });
  }

  @Action(CreatePostFailure)
  createPostFailure(ctx: StateContext<CreatePostStateModel>, action: CreatePostFailure) {
    ctx.patchState({ postId: null, error: action.error });
  }
}
