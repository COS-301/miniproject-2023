import { MinimizedProfile } from "./minimized-profile.interface";

export interface ProfilesList{
    userFound: boolean;
    list: MinimizedProfile [] | null | undefined;
}