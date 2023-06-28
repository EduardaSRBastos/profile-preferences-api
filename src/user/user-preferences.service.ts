import { Injectable } from '@nestjs/common';
import { UserPreferences } from './user-preferences.model';
import * as admin from 'firebase-admin';
import { logger } from '../logger';

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
    try {
      logger.log(`Saving user preferences for userID: ${userPreferences.userID}`);

      // Convert the UserPreferences object to a plain JavaScript object
      const userPreferencesData = Object.assign({}, userPreferences);

      // Save the data to Firestore
      await this.preferencesCollection.doc(userPreferences.userID).set(userPreferencesData);

      // Log the successful save
      logger.log(`User preferences saved for userID: ${userPreferences.userID}`);

      return { resource: userPreferences };
    } catch (error) {
      // Log any errors that occur during the process
      logger.error(`Error saving user preferences: ${error.message}`, error.stack);
      throw error;
    }
  }
}
