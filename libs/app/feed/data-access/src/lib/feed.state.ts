import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import {
  SetFilterList,
  SetPost,
  SetPostList,
  SetTimeModification,
  SetUserTime,
} from '@mp/app/feed/util';


import {
  FilterList,
  Post,
  PostList,
  TimeModification,
  UserTime,
  Discipline,
  FilterType,
  FetchPostsRequest,
  FetchPostsResponse,
} from '@mp/api/feed/util';

import { IUser } from '@mp/api/users/util';

import { FeedApi } from './feed.api';
import { SetError } from '@mp/app/errors/util';
import { fetchPosts } from '@mp/api/core/feature';

export interface FeedStateModel {

  filterList: FilterList | null;
  postList: PostList | null;
  post: Post | null;
  timeModification: TimeModification | null;
  userTime: UserTime | null;

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
  };

  FilterList: {
    model: {
      list: FilterType[] | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };

  PostList: {
    model: {
      postFound: boolean | null;
      list: Post[] | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };

  TimeModification: {
    model: {
      postID: string | null;
      time: number | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };

  UserTime: {
    model: {
      timeRemaining: boolean | null;
      timeAbout: number | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
}

@State<FeedStateModel>({

  name: 'feed',
  defaults: {
    filterList: null,
    postList: null,
    post: null,
    timeModification: null,
    userTime: null,

    Post: {
      model: {
        id : null,
        title : null,
        author : null,
        description : null,
        content : null,
        discipline : null,
        time : null,
      },

      dirty: false,
      status: '',
      errors: {},
    },

    FilterList: {
      model: {
        list: null,
      },
      dirty: false,
      status: '',
      errors: {},
  },

  PostList: {
    model: {
      postFound: null,
      list: null,
    },
    dirty: false,
    status: '',
    errors: {},
  },

  TimeModification: {
    model: {
      postID: null,
      time: null,
    },
    dirty: false,
    status: '',
    errors: {},
  },

  UserTime: {
    model: {
      timeRemaining: null,
      timeAbout: null,
    },
    dirty: false,
    status: '',
    errors: {},
  },
  },

})
@Injectable()
export class FeedState {
  constructor(
    private readonly feedApi: FeedApi,
    private readonly store: Store,
    ) {}

  @Selector()
  static feed(state: FeedStateModel) {
    return state.PostList;
  }

  @Action(SetFilterList)
  async setFilterList(
    ctx: StateContext<FeedStateModel>,
    { payload }: SetFilterList
    ) {
    try{


      ctx.setState(
        produce((draft) => {
            draft.filterList = {
              list: null,
            }
            draft.filterList.list = payload.list;
            draft.FilterList = {model : {list : payload.list}, dirty : false, status : '', errors : {}};
        }));

        ctx.dispatch(new SetPostList());
      return;
    }catch(error){
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(SetPostList)
  async setPostList(
    ctx: StateContext<FeedStateModel>)
    {

      const rqst: FetchPostsRequest = {
        filters : this.store.selectSnapshot(FeedState).filterList.list,
      };


      const listOfPosts = await this.feedApi.fetchPosts$(rqst);

      const arrOfPosts: Post[] = [];

      listOfPosts.data.posts.list?.forEach((post) => {
        arrOfPosts.push({
          id : post.id,
          title : post.title,
          author : post.author,
          description : post.description,
          content : post.content,
          discipline : post.discipline,
          time : post.time,
        });
      });

      console.table(arrOfPosts);

      ctx.setState(
        produce((draft) => {
            draft.PostList = {
              model: {
                postFound: true,
                list: arrOfPosts,
              },
              dirty: false,
              status: '',
              errors: {},
            }
        }));

  }

  @Action(SetPost)
  async setPost(
    ctx: StateContext<FeedStateModel>,
    {payload}: SetPost
    ){
    try{

      ctx.setState(
        produce((draft) => {
            draft.Post = {model : payload.post, dirty : false, status : '', errors : {}};
            draft.post = payload.post;
        }));

      return;
    }catch(error){
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(SetTimeModification)
  async setTimeModification(ctx: StateContext<FeedStateModel>, {timeModification}: SetTimeModification){
    console.log('timeModification: ', timeModification);
    return ctx.setState(
      produce((draft) => {
        draft.timeModification = timeModification;
      })
    )
  }

  @Action(SetUserTime)
  async setUserTime(ctx: StateContext<FeedStateModel>, {userTime}: SetUserTime){
    console.log('userTime: ', userTime);
    return ctx.setState(
      produce((draft) => {
        draft.userTime = userTime;
      })
    )
  }
}
