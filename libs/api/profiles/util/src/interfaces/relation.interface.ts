import { RelationEnum } from "../enums/relations.enum";

export interface IRelation {
    exists?: boolean | null | undefined;
    type?: RelationEnum | null | undefined;
  }
  