import { SettingsStatus } from "../enums";

export interface IInformationSettings {
    informationSettings?: [] | null | undefined;
    status?: SettingsStatus | null | undefined;
}