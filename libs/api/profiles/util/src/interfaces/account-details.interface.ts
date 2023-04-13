import { ProfileStatus } from '../enums';
import { IBadge } from './badge.interface';
import { IMeter } from './meter.interface';

export interface IAccountDetails {
  userName?: string | null | undefined;
  email?: string | null | undefined;
  photoURL?: string | null | undefined;
  password?: string | null | undefined;
  title?: string | null | undefined;
  private?: boolean | null | undefined;
  // friends?: string[] | null | undefined;
  time?: string | null | undefined;
  meters?: IMeter[] | null | undefined;
  badges?: IBadge[] | null | undefined;
  status?: ProfileStatus | null | undefined;
}
