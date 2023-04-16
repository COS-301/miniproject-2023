import { IProfilePageSettings, IPrivacySettings, IInformationSettings, IPasswordSettings, IDeleteAccountSettings } from "@mp/api/settings/util";
import { Injectable } from '@nestjs/common';
import { IUser } from '@mp/api/users/util';
/*import * as admin from 'firebase-admin';*/

@Injectable()
export class SettingsRepository {
    async readProfileSettings(user : IUser) {
        /*return await admin
            .firestore()
            .collection('profilePaupdatetings')
            .withConverter<IProfilePaupdatetings>({
                fromFireStore
            }
            )*/

        
    }

    async readInformationSettings(user : IUser) {
        // Query Database 
    }

    async readPrivacySettings(user : IUser) {
        // Query Database
    }

    async readOldPassword(user : IUser) {
        // Query Database
    }

    async updateProfileSettings(user : IUser) {
        /*return await admin
            .firestore()
            .collection('profilePaupdatetings')
            .withConverter<IProfilePaupdatetings>({
                fromFireStore
            }
            )*/

        
    }

    async updateInformationSettings(user : IUser) {
        // Query Database 
    }

    async updatePrivacySettings(user : IUser) {
        // Query Database
    }

    async updateOldPassword(user : IUser) {
        // Query Database
    }

    async deleteAccount(user : IUser) {
        // Query Database
    }
}