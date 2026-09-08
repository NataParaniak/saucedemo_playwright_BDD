// Generated from: features\logout.feature
import { test } from "playwright-bdd";

test.describe('Logout', () => {

  test('Successful logout', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is logged in', null, { page }); 
    await When('the user clicks the burger menu', null, { page }); 
    await And('the user clicks the Logout button', null, { page }); 
    await Then('the user should be redirected to the Login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user clicks the burger menu","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user clicks the Logout button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Login page","stepMatchArguments":[]}]},
]; // bdd-data-end