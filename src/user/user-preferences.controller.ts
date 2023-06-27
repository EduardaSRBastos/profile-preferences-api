import { Controller, Post, Body, HttpCode, HttpStatus, ConflictException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserPreferences } from '../user/user-preferences.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Preferences')
@Controller('v1/user/preferences')
export class UserPreferencesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUserPreferences(
    @Body() userPreferences: UserPreferences,
  ): Promise<void> {
    const firestore = admin.firestore();
    const preferencesCollection = firestore.collection('userPreferences');

    // Check if a document with the same user ID already exists
    const existingDoc = await preferencesCollection.doc(userPreferences.userID).get();
    if (existingDoc.exists) {
      throw new ConflictException('Duplicate request. User preferences already exist.');
    }

    // Save the data to Firestore
    await preferencesCollection.doc(userPreferences.userID).set(userPreferences);
  }
}
