import { IUpdateRelationRequest } from "../requests/update-relation.request";

export class UpdateRelationCommand {
  constructor(public readonly request: IUpdateRelationRequest) {}
}