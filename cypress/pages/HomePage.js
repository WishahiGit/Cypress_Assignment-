import BasePage from './BasePage';

export class HomePage extends BasePage {
  SIGN_IN_MENU = '#nav-link-accountList';
  USER_STATUS = '#nav-link-accountList-nav-line-1';
  HOME_LOGO = '//*[@id="nav-bb-logo"]';

  clickHomeLogo() {
    this.clickByXpath(this.HOME_LOGO);
  }

  waitForUserStatus() {
    this.waitForVisibility(this.USER_STATUS);
  }

  validateUserStatusText(expectedText = 'Hello, sign in') {
    this.validateText(this.USER_STATUS, expectedText);
  }

  validateHomePage(retries = 2) {
    const attemptValidation = (attempt = 1) => {
      cy.get('body').then($body => {
        const hasSignIn = $body.find(this.SIGN_IN_MENU).length > 0;
        const hasUserStatus = $body.find(this.USER_STATUS).length > 0;

        if ((!hasSignIn || !hasUserStatus) && attempt <= retries) {
          cy.log(`Elements missing. Retry ${attempt} of ${retries}: clicking logo and waiting`);
          this.clickHomeLogo();
          cy.wait(2000);
          attemptValidation(attempt + 1);
        } else {
          this.waitForUserStatus();
          this.validateUserStatusText();
        }
      });
    };

    attemptValidation();
  }
}
