Feature: Login

  Scenario: Successful login with valid credentials
    Given the user is on the SauceDemo login page
    When the user enters valid credentials
    And the user clicks the Login button
    Then the user should be redirected to the Inventory page

 Scenario: Login with a locked-out user

Given the user is on the SauceDemo login page
When the user enters blocked credentials
And the user clicks the Login button
Then the error message "Epic sadface: Sorry, this user has been locked out." should be displayed
And user should remain on the login page

Scenario: Login with empty credentials

Given the user is on the SauceDemo login page
And the user clicks the Login button   
 Then login error message "Epic sadface: Username is required" should be displayed
And user should remain on the login page