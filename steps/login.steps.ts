
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('the user is on the SauceDemo login page', async ({ page }) => {
  await page.goto('/');
});

When('the user enters username {string}', async ({ page }, username) => {
  await page.locator('[data-test="username"]').fill(username);
});

When('the user enters password {string}', async ({ page }, password) => {
  await page.locator('[data-test="password"]').fill(password);
});


When('the user clicks the Login button', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('the user should be redirected to the Inventory page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory.html/);
});

Then(
  'the error message {string} should be displayed',
  async ({ page }, message) => {
    await expect(page.locator('[data-test="error"]')).toContainText(message);
  }
);

When(
  'the user clicks the Login button without entering username and password',
  async ({ page }) => {
    await page.locator('[data-test="login-button"]').click();
  }
);

Then(
  'a validation error message should be displayed',
  async ({ page }) => {
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  }
);
