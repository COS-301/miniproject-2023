import { IBuyPostRequest } from '../requests';
export class BuyPostCommand{
    constructor(public readonly request: IBuyPostRequest) {}
  }