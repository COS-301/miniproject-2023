
export interface IBadge {
    name?: string | null | undefined;
    level?: number | null | undefined; 
    discipline?: string | null | undefined; //DisciplineEnum | null | undefined;
    achieved?: boolean | null | undefined;
    iconURL?: string | null | undefined; //Decide on method of storing images
  }
  