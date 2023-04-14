import { Tab } from "./Tab";

export class ToggleTab {
    static readonly type = '[Home] ToggleTab';
    constructor(public tabs:{'name': string, 'active': boolean}[]) {}
}

export class SetActiveTab {
    static readonly type = '[Navbar] Set Active Item';
    constructor(public payload: Tab) {}
  }

export class SubscribeToHome {
    static readonly type = '[Home] SubscribeToHome';
  }

export class SetHome {
    static readonly type = '[Home] SetHome';
    constructor(public tabs: {'name':string, 'active':boolean}[]) {}
}