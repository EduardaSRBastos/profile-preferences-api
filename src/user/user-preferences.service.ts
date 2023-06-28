import { Injectable } from '@nestjs/common';
import { UserPreferences } from './user-preferences.model';
import * as admin from 'firebase-admin';

/* The UserPreferencesService class is responsible for saving user preferences to a Firestore
collection. */
@Injectable()
export class UserPreferencesService {
  private readonly preferencesCollection;

  constructor() {
    // Reference to Firestore collection
    this.preferencesCollection = admin.firestore().collection('userPreferences');
  }

  async saveUserPreferences(userPreferences: UserPreferences) {
    // Convert the UserPreferences object to a plain JavaScript object
    const userPreferencesData = Object.assign({}, userPreferences);

    // Save the data to Firestore
    await this.preferencesCollection.doc(userPreferences.userID).set(userPreferencesData);

    return { resource: userPreferences };
  }
}
