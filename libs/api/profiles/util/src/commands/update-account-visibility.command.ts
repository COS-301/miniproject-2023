import { IUpdateAccountVisibilityRequest } from '../requests';

export class UpdateAccountVisibilityCommand {
  constructor(public readonly request: IUpdateAccountVisibilityRequest) {}
}