# Profile Preferences API

This is the documentation for the Profile Preferences API. The API allows users to create their account preferences.

## Technology Stack

  *  TypeScript
  *  Node.js (v16)
  *  Nest.js (v9)
  *  Firestore SDK for data storage
  *  Jest for unit testing
  *  Cucumber for API/component testing
  *  Swagger for API documentation

## Installation

To run the Profile Preferences API locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/EduardaSRBastos/profile-preferences-api.git

2. Install dependencies:

    ```bash
    cd profile-preferences-api
    npm install

3. Set up Firebase:
   
 * Create a new Firebase project and obtain the necessary credentials.
 * Configure Firebase in the project by providing the credentials.

Remember to replace the placeholder values (such as Firebase credentials and user ID) with the actual values when setting up and using the API.

1. Start the API server:

    ```bash
    npm run start

The API will be available at http://localhost:3000 and the Swagger UI at http://localhost:3000/api.

## API Endpoint

The Profile Preferences API provides the following endpoint:

`POST /v1/user/preferences`: Create user preferences.

### Request

To create user preferences, send a POST request to the `/v1/user/preferences` endpoint with a similar JSON payload:

  ```bash
  {
    "userID": "10",
    "termsAndConditionAccepted": true,
    "languagePreferences": "en",
    "showProfilePreferences": true,
    "showLanguagesPreferences": true
  }
   ```

The JSON payload need to include the fields:

 * `userID` (string): User's unique identifier.
 * `termsAndConditionAccepted` (boolean): Indicates whether the user accepted the terms and conditions.
 * `languagePreferences` (string): The user's preferred language.
 * `showProfilePreferences` (boolean): Specifies whether user profile preferences will be displayed.
 * `showLanguagesPreferences` (boolean): Specifies whether the user's language preferences will be displayed.

### Response

Upon successful creation, the API will respond with a status code 201 Created and a response body containing the created user preferences. 

## Testing

To run the tests for the Profile Preferences API, you can use the following commands:

* To run the Jest unit tests:

  ```bash
  npm run test-jest

* To run the Cucumber integration tests:

  ```bash
  npm run test-cucumber

## Deployment

This API is deployed to GCP using Cloud Functions.

## Logging

The API includes logging using the LoggerService from the Nest.js framework.