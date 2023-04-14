import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { SetError } from '@mp/app/errors/util';
import { HomeApi } from "./home.api";
import { SetActiveTab, SetHome, SubscribeToHome, ToggleTab } from "@mp/app/home/utils"
import produce from 'immer';
import { Tab } from "@mp/app/home/utils";

export interface HomeStateModel {
    // tabs: {
    //     'feed': {
    //         'id': number;
    //         'active': boolean;
    //     },
    //     'search': {
    //         'id': number;
    //         'active': boolean;
    //     },
    //     'profile': {
    //         'id': number;
    //         'active': boolean;
    //     }
    // }
    // tabs: {'name': string, 'active': boolean}[];
    tabs: Tab[];
}

@State<HomeStateModel>({
    name: 'home',
    defaults: {
        tabs: [
          // { name: 'feed', active: true, icon: "home-outline"},
          // { name: 'search', active: false, icon: "search"},
          // { name: 'profile', active: false, icon: "person-circle-outline"}
          { name: 'feed', active: true},
          { name: 'search', active: false},
          { name: 'profile', active: false}
        ]
    },
})

@Injectable()
export class HomeState {
  // constructor(
  //   // private readonly profileApi: ProfilesApi,
  //   private readonly store: Store
  // ) {}

  @Selector()
  static getTabs(state: HomeStateModel): Tab[] {
    return state.tabs;
  }

  @Action(SetActiveTab)
  setActiveTab(ctx: StateContext<HomeStateModel>, { payload }: SetActiveTab) {
    const tabs = [...ctx.getState().tabs];
    tabs.forEach(tab => {
      if (tab.name === payload.name) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    ctx.patchState({ tabs });
  }

  @Action(ToggleTab)
  toggleTab(ctx: StateContext<HomeStateModel>, { tabs }: ToggleTab) {
    const state = ctx.getState();
    ctx.patchState({
      tabs: tabs
    })
  }

  // @Action(SubscribeToHome)
  // subscribeToHome(ctx: StateContext<HomeStateModel>) {

  //   return ctx.dispatch(new SetHome());
  // }

  // @Action(SetHome)
  // setHome(ctx: StateContext<HomeStateModel>, { tabs }: SetHome) {
  //   window.alert(tabs);
  //   return ctx.setState(
  //     produce((draft) => {
  //       draft.tabs = tabs;
  //     })
  //   );
  // }
}

