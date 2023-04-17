import { SettingsStatus } from "../enums";

export interface IProfilePageSettings {
    profilePageSettings?: [] | null | undefined;
    status?: SettingsStatus | null | undefined;
}