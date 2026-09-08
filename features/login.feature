Feature: Login

  Scenario: Successful login with valid credentials
    Given the user is on the SauceDemo login page
    When the user enters username "standard_user"
    And the user enters password "secret_sauce"
    And the user clicks the Login button
    Then the user should be redirected to the Inventory page

 Scenario: Login with a locked-out user

Given the user is on the SauceDemo login page
When the user enters username "locked_out_user"
And the user enters password "secret_sauce"
And the user clicks the Login button
Then the error message "Sorry, this user has been locked out" should be displayed

Scenario: Login with empty credentials

Given the user is on the SauceDemo login page
When the user clicks the Login button without entering username and password
Then a validation error message should be displayed