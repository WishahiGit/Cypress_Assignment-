import { BaseTest } from './BaseTest';

describe('Task 1 - MainMenu flow', () => {
  const test = new BaseTest();
  
  beforeEach(() => {
   test.login();
  });

  it('Navigate through MenuTabs and perform customer service operations', () => {
    cy.allure().step('Click on Free Shipping Zone tab');
    test.mainMenuPage.FreeShippingZoneTab();

    cy.allure().step('Click on Today\'s Deals tab');
    test.mainMenuPage.TodayDealsTab();

    cy.allure().step('Click on Prime Video tab');
    test.mainMenuPage.PrimeVideoTab();

    cy.allure().step('Click on Buy Again tab');
    test.mainMenuPage.BuyAgainTab();

    cy.allure().step('Click on Registry tab');
    test.mainMenuPage.RegistryTab();

    cy.allure().step('Click on Gift Cards tab');
    test.mainMenuPage.GiftCardsTab();

    cy.allure().step('Click on Sell tab');
    test.mainMenuPage.SellTab();

    cy.allure().step('Navigate to Customer Service tab');
    test.mainMenuPage.CustomerServiceTab();

    cy.allure().step('Click on Where is my stuff');
    test.mainMenuPage.Whereismystuff();

    cy.allure().step('Click on Track Your Package');
    test.mainMenuPage.TrackYourPackage();

    cy.allure().step('Return to Customer Service tab');
    test.mainMenuPage.CustomerServiceTab();

    cy.allure().step('Click on Managing Your Account');
    test.mainMenuPage.ManagingYourAccount();

    cy.allure().step('Click on View Your Gift Card Balance');
    test.mainMenuPage.ViewYourGiftCardBalance();
  });
});
