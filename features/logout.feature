Feature: Logout

  Scenario: Successful logout
    Given the user is logged in
    When the user clicks the burger menu
    And the user clicks the Logout button
    Then the user should be redirected to the Login page
