import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly reactBurgerMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.reactBurgerMenu = page.locator("#react-burger-menu-btn");
    this.logoutButton = page.locator("#logout_sidebar_link");
  }

  async navigate() {
    await super.navigate("/inventory.html");
  }

  async logOut() {
    await this.page.locator("#react-burger-menu-btn").click();
    await this.page.locator("#logout_sidebar_link").click();
  }
}
