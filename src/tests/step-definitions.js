const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const { expect } = require('chai');

/* This is a step definition for the Cucumber test scenario, defined in the userPreferences.feature file.
It defines the steps for a test scenario that involves sending a POST request to a resource endpoint and 
verifying the response. */
let newResource;
let response;

Given('I have a new resource', function () {
  newResource = {
    userID: '8',
    termsAndConditionAccepted: true,
    languagePreferences: 'en',
    showProfilePreferences: true,
    showLanguagesPreferences: true
  };
});

When('I send a POST request to the resource endpoint', async function () {
  try {
    response = await axios.post('http://localhost:3000/v1/user/preferences', newResource);
  } catch (error) {
    response = error.response;
  }
});

/*Then('I should receive a {int} response', function (statusCode) {
  expect(response).to.exist;
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (response && response.status !== undefined) {
        clearInterval(interval);
        expect(response.status).to.equal(statusCode);
        resolve();
      }
    }, 100);
  });
}); */

Then('I should receive a {int} response', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response body should contain the created resource', function () {
  expect(response).to.exist;
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (response && response.data !== undefined) {
        clearInterval(interval);
        expect(response.data.resource).to.deep.equal(newResource);
        resolve();
      }
    }, 100);
  });
});
