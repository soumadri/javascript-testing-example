Feature: Increment/decrement the counter
  As an user
  I should be able to increment/decrement the counter through buttons
  
  Scenario: App is loaded succesfully
    Given that the app is loaded
    When all the UI elements are visible
    Then I can see the counter value 0

  Scenario: Able to increment counter
    Given that the app loaded
    When user clicks on the "increment" button
    Then I can see the incremented counter value 1