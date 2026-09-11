// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await When('the user enters valid credentials', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('the user should be redirected to the Inventory page', null, { page }); 
  });

  test('Login with a locked-out user', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await When('the user enters blocked credentials', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('the error message "Epic sadface: Sorry, this user has been locked out." should be displayed', null, { page }); 
    await And('user should remain on the login page', null, { page }); 
  });

  test('Login with empty credentials', async ({ Given, Then, And, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('login error message "Epic sadface: Username is required" should be displayed', null, { page }); 
    await And('user should remain on the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user enters valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters blocked credentials","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Epic sadface: Sorry, this user has been locked out.\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":19,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And user should remain on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then login error message \"Epic sadface: Username is required\" should be displayed","stepMatchArguments":[{"group":{"start":20,"value":"\"Epic sadface: Username is required\"","children":[{"start":21,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And user should remain on the login page","stepMatchArguments":[]}]},
]; // bdd-data-end