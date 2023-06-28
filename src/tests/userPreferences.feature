Feature: UserPreferences API
  As a user
  I want to interact with the UserPreferences API

  Scenario: Creating a resource
    Given I have a new resource
    When I send a POST request to the resource endpoint
    Then I should receive a 201 response
    And the response body should contain the created resource
