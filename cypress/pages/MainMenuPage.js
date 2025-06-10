import BasePage from './BasePage';

export class MainMenuPage extends BasePage {
  FREE_SHIPPING_TAB = '#nav-link-fsz-in';
  TODAY_DEALS_TAB = '//*[@id="nav-xshop"]/ul/li[2]/div/a';
  PRIME_VIDEO_TAB = '//*[@id="nav-xshop"]/ul/li[3]/div/a';
  BUY_AGAIN_TAB = '//*[@id="nav-xshop"]/ul/li[4]/div/a';
  CUSTOMER_SERVICE_TAB = '//*[@id="nav-xshop"]/ul/li[5]/div/a';
  REGISTRY_TAB = '//*[@id="nav-xshop"]/ul/li[6]/div/a';
  GIFT_CARDS_TAB = '//*[@id="nav-xshop"]/ul/li[7]/div/a';
  SELL_TAB = '//*[@id="nav-xshop"]/ul/li[8]/div/a';
  WHERE_IS_MY_STUFF_TAB = '//*[@id="foresight-help-topic-tab-1"]/label';
  MANAGE_ACCOUNT_TAB = '//*[@id="foresight-help-topic-tab-4"]/label';

  FreeShippingZoneTab() {
    this.isVisible(this.FREE_SHIPPING_TAB);
    this.click(this.FREE_SHIPPING_TAB);
    this.validateText('body', 'Free Shipping on International Top');
  }

  TodayDealsTab() {
    this.isVisibleByXpath(this.TODAY_DEALS_TAB);
    this.clickByXpath(this.TODAY_DEALS_TAB);
    this.validateText('body', 'For you');
  }

  PrimeVideoTab() {
    this.isVisibleByXpath(this.PRIME_VIDEO_TAB);
    this.clickByXpath(this.PRIME_VIDEO_TAB);
    cy.url().should('include', '/Amazon-Video/b/');
  }

  BuyAgainTab() {
    this.isVisibleByXpath(this.BUY_AGAIN_TAB);
    this.clickByXpath(this.BUY_AGAIN_TAB);
    this.validateText('body', 'Your Orders');
  }

  RegistryTab() {
    this.isVisibleByXpath(this.REGISTRY_TAB);
    this.clickByXpath(this.REGISTRY_TAB);
    this.validateText('body', 'Make your registry unique to you');
  }

  GiftCardsTab() {
    this.isVisibleByXpath(this.GIFT_CARDS_TAB);
    this.clickByXpath(this.GIFT_CARDS_TAB);
    this.validateText('body', 'Amazon Gift Cards');
  }

  SellTab() {
    this.isVisibleByXpath(this.SELL_TAB);
    this.clickByXpath(this.SELL_TAB);
    this.validateText('body', 'Sell with Amazon');
  }

  CustomerServiceTab() {
    this.isVisibleByXpath(this.CUSTOMER_SERVICE_TAB);
    this.clickByXpath(this.CUSTOMER_SERVICE_TAB);
    this.validateText('body', 'Welcome to Amazon Customer Service');
  }

  Whereismystuff() {
    this.isVisibleByXpath(this.WHERE_IS_MY_STUFF_TAB);
    this.clickByXpath(this.WHERE_IS_MY_STUFF_TAB);
    this.validateText('body', 'Track your package');
  }

  TrackYourPackage() {
    cy.contains('Track your package', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    this.validateText('body', 'tracking');
    this.validateText('body', 'package');
  }

  ManagingYourAccount() {
    this.isVisibleByXpath(this.MANAGE_ACCOUNT_TAB);
    this.clickByXpath(this.MANAGE_ACCOUNT_TAB);
    this.validateText('body', 'Cancel Items or Orders');
  }

  ViewYourGiftCardBalance() {
    cy.contains('div[role="link"]', 'View Your Gift Card Balance', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    this.validateText('body', 'You can view your Amazon.com Gift Card balance');
  }
}
