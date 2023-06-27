const { Given, When, Then } = require('cucumber');
const axios = require('axios');
const { expect } = require('chai');

let newResource;
let response;

Given('I have a new resource', function () {
  newResource = {
    termsAndConditionAccepted: true,
    languagePreferences: 'en',
    showProfilePreferences: true,
    showLanguagesPreferences: true
  };
});

When('I send a POST request to the resource endpoint', async function () {
  try {
    response = await axios.post('/api/resource-endpoint', newResource);
  } catch (error) {
    response = error.response;
  }
});

Then('I should receive a {int} response', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response body should contain the created resource', function () {
  expect(response.data).to.deep.equal(newResource);
});
