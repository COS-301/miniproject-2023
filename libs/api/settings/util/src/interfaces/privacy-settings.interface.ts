import { SettingsStatus } from "../enums";

export interface IPrivacySettings {
    privacySettings?: [] | null | undefined;
    status?: SettingsStatus | null | undefined;
}