Feature: Logout

  Scenario: Successful logout
    Given the user is logged in
    When the user logs out
    Then user should remain on the login page
