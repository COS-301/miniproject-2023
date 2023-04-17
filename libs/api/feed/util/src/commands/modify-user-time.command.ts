import { ModifyUserTimeRequest } from '../requests';

export class ModifyUserTimeCommand {
  constructor(public readonly request: ModifyUserTimeRequest) {
    
  }
}