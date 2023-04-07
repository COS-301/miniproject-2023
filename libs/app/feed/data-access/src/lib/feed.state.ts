import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import {
  printe,
  SetFilterList,
  SetPost,
  SetPostList,
  SetPostListLoading,
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
  AddTimeRequest,
  GetUserTimeRequest,
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
    return state.FilterList;
  }

  @Action(printe)
  async printe() {
    console.log('action triggered');
  }

  @Action(SetFilterList)
  async setFilterList(ctx: StateContext<FeedStateModel>) {
    console.log('action triggered');
    try{

      const state = ctx.getState();
      const filterList = state.FilterList.model.list;

      if  (!filterList){
        return ctx.dispatch(
          new SetError('filterlist not set')
        );
      }

      console.log('filterList: ', filterList)

      const request: FetchPostsRequest = {
        filters:{
          list: filterList,
        }
      }

      //const responseRef = await this.feedApi.fetchPosts(request);
      //const response = responseRef;

     // console.log('response: ', response);

      return;
      ///return ctx.dispatch(new SetPostList(response));
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

}
