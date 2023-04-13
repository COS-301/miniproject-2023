import { GetUserTimeRequest } from '../requests';

export class GetUserTimeCommand {
  constructor(public readonly request: GetUserTimeRequest) {
    
  }
}