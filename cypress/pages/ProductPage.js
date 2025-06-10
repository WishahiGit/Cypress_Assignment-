import BasePage from './BasePage';

export class ProductPage extends BasePage {
  ADD_TO_CART_BUTTON = 'input#add-to-cart-button';
  CART_COUNT = '#nav-cart-count';
  COLOR_OPTION = '//*[@id="color_name_1"]/span/input';
  COLOR_TEXT = '#inline-twister-expanded-dimension-text-color_name';
  SCISSORS_PRODUCT_URL = 'https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z';

  clickOnExactProduct(productName) {
    cy.contains('a', productName, { timeout: 15000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
  }

  clickAddToCart() {
    this.isVisible(this.ADD_TO_CART_BUTTON);
    this.click(this.ADD_TO_CART_BUTTON);
  }

  validateAddedToCart(expectedCount = 1) {
    this.isVisible(this.CART_COUNT);
    cy.get(this.CART_COUNT).should('have.text', expectedCount.toString());
  }

  goToScissorsProductPage() {
    cy.visit(this.SCISSORS_PRODUCT_URL);
  }

  selectColorAndValidateChange() {
    const expectedColor = 'Yellow, Grey, Blue';
    cy.xpath(this.COLOR_OPTION)
      .filter(':visible')
      .first()
      .scrollIntoView()
      .should('exist')
      .click({ force: true });

    this.isVisible(this.COLOR_TEXT);
    this.validateText(this.COLOR_TEXT, expectedColor);
  }
}
