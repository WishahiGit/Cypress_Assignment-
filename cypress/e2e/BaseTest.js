import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

export class BaseTest {
  constructor() {
    this.loginPage = new LoginPage();
    this.mainMenuPage = new MainMenuPage();
    this.searchPage = new SearchPage();
    this.productPage = new ProductPage();
    this.cartPage = new CartPage();
  }

  login() {
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    this.loginPage.login(email, password);
    cy.wait(5000);
  }
}
