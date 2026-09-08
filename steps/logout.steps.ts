import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('the user is logged in', async ({ page }) => {
  await page.goto('/');
  
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);
});

When('the user clicks the burger menu', async ({ page }) => {
  await page.locator('#react-burger-menu-btn').click();
});

When('the user clicks the Logout button', async ({ page }) => {
  await page.locator('#logout_sidebar_link').click();
});

Then('the user should be redirected to the Login page', async ({ page }) => {
 await expect(page).toHaveURL('/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
});