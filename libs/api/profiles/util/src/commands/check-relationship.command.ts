import { ICheckRelationshipRequest } from '../requests/check-relationship.request';

export class CheckRelationshipCommand {
  constructor(public readonly request: ICheckRelationshipRequest) {}
}