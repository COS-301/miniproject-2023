import {
  AccountDetailsUpdatedEvent,
  AddressDetailsUpdatedEvent,
  ContactDetailsUpdatedEvent,
  IAccountDetails,
  IAddressDetails,
  IContactDetails,
  IOccupationDetails,
  IPersonalDetails,
  IProfile,
  OccupationDetailsUpdatedEvent,
  PersonalDetailsUpdatedEvent,
  ProfileCreatedEvent,
  ProfileStatus,
  ProfileStatusUpdatedEvent
} from '@mp/api/profiles/util';
import { AggregateRoot } from '@nestjs/cqrs';

export class Profile extends AggregateRoot implements IProfile {
  constructor(
    public userId: string,
    public accountDetails?: IAccountDetails | null | undefined,
    public status?: ProfileStatus | null | undefined,
    public created?: FirebaseFirestore.Timestamp | null | undefined
  ) {
    super();
  }

  static fromData(profile: IProfile): Profile {
    const instance = new Profile(
      profile.userId,
      profile.accountDetails,
      profile.status,
      profile.created
    );
    return instance;
  }

  create() {
    this.apply(new ProfileCreatedEvent(this.toJSON()));
  }

  updateAccountDetails(accountDetails: IAccountDetails) {
    if (!this.accountDetails) this.accountDetails = {};
    this.accountDetails.userName = accountDetails.userName
      ? accountDetails.userName
      : this.accountDetails.userName;
    this.accountDetails.email = accountDetails.email
      ? accountDetails.email
      : this.accountDetails.email;
    this.accountDetails.photoURL = accountDetails.photoURL
      ? accountDetails.photoURL
      : this.accountDetails.photoURL;
    this.accountDetails.password = accountDetails.password
      ? accountDetails.password
      : this.accountDetails.password;
    this.apply(new AccountDetailsUpdatedEvent(this.toJSON()));
  }

  private updateAccountDetailsStatus() {
    if (!this.accountDetails) {
      this.accountDetails = {};
      this.accountDetails.status = ProfileStatus.INCOMPLETE;
      this.status = ProfileStatus.INCOMPLETE;
      return;
    }

    if (!this.accountDetails.userName || !this.accountDetails.email) {
      this.accountDetails.status = ProfileStatus.INCOMPLETE;
      this.status = ProfileStatus.INCOMPLETE;
      return;
    }

    this.accountDetails.status = ProfileStatus.COMPLETE;
    return;
  }

  updateStatus() {
    this.updateAccountDetailsStatus();

    if (
      this.accountDetails?.status === ProfileStatus.COMPLETE
    ) {
      this.status = ProfileStatus.COMPLETE;
    }

    this.apply(new ProfileStatusUpdatedEvent(this.toJSON()));
  }

  toJSON(): IProfile {
    return {
      userId: this.userId,
      accountDetails: this.accountDetails,
      status: this.status,
      created: this.created,
    };
  }
}
