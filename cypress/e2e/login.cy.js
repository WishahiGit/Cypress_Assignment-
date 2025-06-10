import { BaseTest } from './BaseTest';

describe('Login Flow', () => {
  const test = new BaseTest();

  beforeEach(() => {
    test.login();  
  });

  it('Validate logged-in status', () => {
    cy.get(test.loginPage.USER_STATUS, { timeout: 10000 })
      .should('contain.text', 'Hello, Amazon');
  });
});
