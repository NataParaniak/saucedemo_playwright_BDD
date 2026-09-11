
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { validUser, lockedUser } from '../test-data/credentials';

const { Given, When, Then } = createBdd();

Given('the user is on the SauceDemo login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
});

When('the user enters valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.inputLogin(validUser.username,validUser.password);
});

When('the user enters blocked credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.inputLogin(lockedUser.username,lockedUser.password);
});



When('the user clicks the Login button', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.clickLogin();
});

Then('the user should be redirected to the Inventory page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/);
});

Then(
  'the error message {string} should be displayed',
  async ({ page }, message) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.errorMessage).toHaveText(message);
  }
);

Then(
  'login error message {string} should be displayed',
  async ({ page }, message) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.errorMessage).toHaveText(message);
  }
);

Then('user should remain on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await expect(loginPage.loginButton).toBeVisible();
});
