import { SearchRequest } from '../requests'; 

export class SearchCommand {
    constructor(public readonly request: SearchRequest){

    }
}