import { Injectable } from '@nestjs/common';
import { UserPreferences } from './user-preferences.model';
import * as admin from 'firebase-admin';

@Injectable()
export class UserPreferencesService {
  private readonly preferencesCollection;

  constructor() {
    // Reference to Firestore collection
    this.preferencesCollection = admin.firestore().collection('userPreferences');
  }

  async saveUserPreferences(userPreferences: UserPreferences): Promise<void> {
    // Convert the UserPreferences object to a plain JavaScript object
    const userPreferencesData = Object.assign({}, userPreferences);

    // Save the data to Firestore
    await this.preferencesCollection.doc(userPreferences.userID).set(userPreferencesData);
  }
}
