import { SettingsStatus } from "../enums";

export interface IPasswordSettings {
    oldpassword?: string | null | undefined;
    newpassword?: string | null | undefined;
    verifynewpassword?: string | null | undefined;
    status?: SettingsStatus | null | undefined;
}