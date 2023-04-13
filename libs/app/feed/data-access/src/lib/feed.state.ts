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
} from '@mp/api/feed/util';

import { IUser } from '@mp/api/users/util';

import { FeedApi } from './feed.api';
import { SetError } from '@mp/app/errors/util';

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
    private readonly store: Store,
    ) {//
    }

  @Selector()
  static feed(state: FeedStateModel) {
    return state;
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
        }));

      return;
    }catch(error){
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(SetPostList)
  async setPostList(ctx: StateContext<FeedStateModel>, {postList}: SetPostList){
    console.log('postList: ', postList);
    return ctx.setState(
      produce((draft) => {
        draft.postList = postList;
      })
    )
  }

  @Action(SetPost)
  async setPost(ctx: StateContext<FeedStateModel>, {post}: SetPost){
    console.log('post: ', post);
    return ctx.setState(
      produce((draft) => {
        draft.post = post;
      })
    )
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
