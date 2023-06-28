import { Controller, Post, Body, HttpCode, HttpStatus, ConflictException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserPreferences } from '../user/user-preferences.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { logger } from '../logger';

/* The UserPreferencesController class is a controller that handles the creation of user
preferences and saves them to a Firestore database. */
@ApiTags('User Preferences')
@Controller('v1/user/preferences')
export class UserPreferencesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create User Preferences' })
  async createUserPreferences(
    @Body() userPreferences: UserPreferences,
  ): Promise<any> {
    try {
      // Log the incoming request
      logger.log(`Received request to create user preferences for userID: ${userPreferences.userID}`);
  
      const firestore = admin.firestore();
      const preferencesCollection = firestore.collection('userPreferences');
  
      // Check if a document with the same user ID already exists
      const existingDoc = await preferencesCollection.doc(userPreferences.userID).get();
      if (existingDoc.exists) {
        // Log the conflict error
        logger.warn('Duplicate request. User preferences already exist.');
        throw new ConflictException('Duplicate request. User preferences already exist.');
      }
  
      // Save the data to Firestore
      await preferencesCollection.doc(userPreferences.userID).set(userPreferences);
  
      // Log the successful creation
      logger.log(`User preferences created for userID: ${userPreferences.userID}`);
  
      // Return the created resource in the response body
      return { resource: userPreferences };
    } catch (error) {
      // Log any errors that occur during the process
      logger.error(`Error creating user preferences: ${error.message}`, error.stack);
      throw error;
    }
  }
}
