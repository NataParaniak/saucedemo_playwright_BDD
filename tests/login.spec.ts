import { test,expect } from '@playwright/test';
 test.describe('Login', () => { test('Successful login', async ({ page }) => { 
    await page.goto('https://www.saucedemo.com/v1/');
     await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
       await page.locator('#login-button').click(); 
       await expect(page).toHaveURL(/inventory/); });
 });

 test('Login with locked out user', async ({ page }) => { 
    await page.goto('https://www.saucedemo.com/v1/'); 
    await page.locator('[data-test="username"]').fill('locked_out_user'); 
    await page.locator('[data-test="password"]').fill('secret_sauce');
     await page.locator('#login-button').click(); 
     await expect(page.locator('[data-test="error"]')) .toContainText('Sorry, this user has been locked out'); });
     
    test('Login with empty credentials', async ({ page }) => {
         await page.goto('https://www.saucedemo.com/v1/'); 
         await page.locator('#login-button').click();
          await expect(page.locator('[data-test="error"]')) .toBeVisible(); }); 