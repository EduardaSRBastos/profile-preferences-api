# Profile Preferences API

This is the documentation for the Profile Preferences API. The API allows users to create their account preferences.

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

4. Start the API server:

    ```bash
    npm run start

The API will be available at http://localhost:3000.

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


Remember to replace the placeholder values (such as Firebase credentials and user ID) with the actual values when setting up and using the API.
