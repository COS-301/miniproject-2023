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
    // Extract the post and file data from the action
    const { post, file } = action;

    // Call the postService to create the post
    return this.postService.createPost(post, file)
      .subscribe(
        (response: any) => {
          // Handle successful response from API
          const postId = response.id; // Update with the actual response property name
          ctx.dispatch(new CreatePostSuccess(postId));
        },
        (error: any) => {
          // Handle error from API
          ctx.dispatch(new CreatePostFailure(error.message));
        }
      );
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
