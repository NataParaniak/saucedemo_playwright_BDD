// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await When('the user enters username "standard_user"', null, { page }); 
    await And('the user enters password "secret_sauce"', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('the user should be redirected to the Inventory page', null, { page }); 
  });

  test('Login with a locked-out user', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await When('the user enters username "locked_out_user"', null, { page }); 
    await And('the user enters password "secret_sauce"', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('the error message "Sorry, this user has been locked out" should be displayed', null, { page }); 
  });

  test('Login with empty credentials', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the SauceDemo login page', null, { page }); 
    await When('the user clicks the Login button without entering username and password', null, { page }); 
    await Then('a validation error message should be displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user enters username \"standard_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user enters password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secret_sauce\"","children":[{"start":26,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enters username \"locked_out_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"locked_out_user\"","children":[{"start":26,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user enters password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secret_sauce\"","children":[{"start":26,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Sorry, this user has been locked out\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Sorry, this user has been locked out\"","children":[{"start":19,"value":"Sorry, this user has been locked out","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given the user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks the Login button without entering username and password","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then a validation error message should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end