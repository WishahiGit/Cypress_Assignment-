import BasePage from './BasePage';
import { HomePage } from './HomePage';

export class LoginPage extends BasePage {
  constructor() {
    super();
    this.homePage = new HomePage();  
  }

  SIGN_IN_MENU = '#nav-link-accountList';
  SIGN_IN_BUTTON = '//*[@id="nav-flyout-ya-signin"]/a/span';
  EMAIL_INPUT = 'input[name="email"]';
  CONTINUE_BUTTON = '.a-button-input[type="submit"]';
  PASSWORD_INPUT = 'input[name="password"]';
  SUBMIT_BUTTON = '.a-button.a-button-span12.a-button-primary.auth-disable-button-on-submit';
  USER_STATUS = '#nav-link-accountList-nav-line-1';

  clickSignInButton() {
    this.hover(this.SIGN_IN_MENU);
    this.isVisibleByXpath(this.SIGN_IN_BUTTON);
    this.clickByXpath(this.SIGN_IN_BUTTON);
  }

  fillEmail(email) {
    this.fillText(this.EMAIL_INPUT, email);
    this.click(this.CONTINUE_BUTTON);
  }

  fillPassword(password) {
    this.fillText(this.PASSWORD_INPUT, password, { log: false });
    this.click(this.SUBMIT_BUTTON);
  }

  validateSuccessfulLogin() {
    this.waitForVisibility(this.USER_STATUS);
    this.validateText(this.USER_STATUS, 'Hello, Amazon');
  }

  login(email, password) {
    cy.visit('/');
    this.homePage.validateHomePage();

    this.getText(this.USER_STATUS).then(text => {
      if (!text.includes('Hello, Amazon')) {
        this.clickSignInButton();
        this.fillEmail(email);
        this.fillPassword(password);
      }
    });

    this.validateSuccessfulLogin();
  }
}
