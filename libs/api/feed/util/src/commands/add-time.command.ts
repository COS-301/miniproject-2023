import { AddTimeRequest } from '../requests';

export class AddTimeCommand {
  constructor(public readonly request: AddTimeRequest) {
    
  }
}