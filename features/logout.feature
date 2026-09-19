Feature: Logout

  Scenario: Successful logout
    Given the user is logged in
    When the user logs out
    Then the user is on the SauceDemo login page
