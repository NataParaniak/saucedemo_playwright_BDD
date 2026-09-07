import { test,expect } from '@playwright/test';
 test.describe('Logout', () => { test('Successful logout', async ({ page }) => { 
    await page.goto('https://www.saucedemo.com/v1/');
     await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
       await page.locator('#login-button').click(); 
       await expect(page).toHaveURL(/inventory/); 
     await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com');
});
 });
