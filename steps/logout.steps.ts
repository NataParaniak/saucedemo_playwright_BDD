import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { InventoryPage } from "../Pages/InventoryPage";
import { validUser } from "../test-data/credentials";

const { Given, When, Then } = createBdd();

Given("the user is logged in", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.inputLogin(validUser.username, validUser.password);
  await loginPage.clickLogin();
  await expect(page).toHaveURL(/inventory\.html/);
});

When("the user logs out", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.logOut();
});

Then("the user should be redirected to the Login page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await expect(page).toHaveURL("/");
  await expect(loginPage.loginButton).toBeVisible();
});
