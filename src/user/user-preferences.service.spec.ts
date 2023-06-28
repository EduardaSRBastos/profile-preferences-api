
import { Test } from '@nestjs/testing';
import { UserPreferencesService } from './user-preferences.service';
import { ConflictException } from '@nestjs/common';
import * as admin from 'firebase-admin';

/* This is a unit test for the `saveUserPreferences` method of the
`UserPreferencesService` class */

// Initialize the default Firebase app with the credentials
const serviceAccount = require('../../firebase/profile-preferences-api-firebase-adminsdk-j2irz-5f17f05444.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Mock Firestore service
const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  get: jest.fn(),
  set: jest.fn().mockResolvedValue(undefined),
};

describe('UserPreferencesService', () => {
  let service: UserPreferencesService;

  beforeEach(async () => {
    // Create a testing module with the UserPreferencesService and Firestore mock
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserPreferencesService,
        { provide: admin.firestore.Firestore, useValue: firestoreMock },
      ],
    }).compile();

    // Get an instance of the UserPreferencesService
    service = moduleRef.get<UserPreferencesService>(UserPreferencesService);
  });

  describe('saveUserPreferences', () => {
    it('should save user preferences', async () => {
      const userPreferences = {
        userID: 'user123',
        termsAndConditionAccepted: true,
        languagePreferences: 'en',
        showProfilePreferences: true,
        showLanguagesPreferences: true,
      };

      // Mock the Firestore get method to indicate that the user preferences don't exist
      firestoreMock.get.mockResolvedValue({ exists: false });

      // Call the saveUserPreferences method and expect the result to match the user preferences
      const result = await service.saveUserPreferences(userPreferences);
      expect(result).toEqual({ resource: userPreferences });
    });

    it('should throw ConflictException if user preferences already exist', async () => {
      const userPreferences = {
        userID: 'user123',
        termsAndConditionAccepted: true,
        languagePreferences: 'en',
        showProfilePreferences: true,
        showLanguagesPreferences: true,
      };

      // Mock the Firestore get method to indicate that the user preferences already exist
      firestoreMock.get.mockResolvedValue({ exists: true });

      try {
        // Call the saveUserPreferences method of the service
        await service.saveUserPreferences(userPreferences);
      } catch (error) {
        // Expect an instance of ConflictException to be thrown
        expect(error).toBeInstanceOf(ConflictException);
      }
    });
  });
});
