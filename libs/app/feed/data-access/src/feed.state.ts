import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { SetError } from '@mp/app/errors/util';
import { FeedApi } from "./feed.api";

export interface FeedStateModel {
    active: boolean
}

@State<FeedStateModel>({
    name: 'feed',
    defaults: {
        active: false
    },
})

@Injectable()
export class FeedState {
  constructor(
    private readonly homeApi: FeedApi,
    private readonly store: Store
  ) {}
}

// @Action(getMemories)
//   async feed(ctx:StateContext<FeedStateModel>, activeTab: ActiveTabObject) {

//       responseRef = this.feedApi.getFeedData();
      
//       const newActiveTab = {
//              feed: true,
//              search & profile: false
//       }
      
//      ctx.dispatch(new SetHomeTab(newActiveTab))

//    response = responseRef.data;
//    return ctx.dispatch(new SetFeedData(response.memories));
// }

