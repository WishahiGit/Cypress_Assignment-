import BasePage from './BasePage';

export class CartPage extends BasePage {
  CART_ICON = '#nav-cart';
  CART_ITEM = '.sc-list-item-content';
  BUY_BOX = '#sc-buy-box';
  INCREASE_BUTTON = 'button[aria-label="Increase quantity by one"]';
  QUANTITY_VALUE = 'span[data-a-selector="value"]';
  DELETE_BUTTON = '[data-feature-id="delete-active"] input[type="submit"]';
  EMPTY_CART_TEXT = 'Your Amazon Cart is empty';

  goToCart() {
    this.isVisible(this.CART_ICON);
    this.click(this.CART_ICON);
    cy.contains(/Shopping Cart|Your Amazon Cart is empty/, { timeout: 10000 }).should('be.visible');
  }

  validateItemInCart(partialItemText) {
    this.waitForVisibility(this.CART_ITEM);
    cy.get(this.CART_ITEM).then($items => {
      const found = [...$items].some(el => el.innerText.includes(partialItemText));
      expect(found, `Expected to find item with text: "${partialItemText}"`).to.be.true;
    });
  }

  validateNoFreeShippingMessage() {
    this.isVisible(this.BUY_BOX);
    this.validateText(this.BUY_BOX, 'not eligible for FREE Shipping');
  }

  updateQuantityToFour(productName) {
    cy.contains(this.CART_ITEM, productName).within(() => {
      for (let i = 0; i < 3; i++) {
        this.isVisible(this.INCREASE_BUTTON);
        this.click(this.INCREASE_BUTTON);
        cy.wait(1000);
      }
      this.waitForVisibility(this.QUANTITY_VALUE, 5000);
      cy.get(this.QUANTITY_VALUE).should('have.text', '4');
    });
  }

  validateFreeShippingAppears() {
    this.waitForVisibility(this.BUY_BOX);
    this.validateText(
      this.BUY_BOX,
      'Part of your order qualifies for FREE Shipping. See each item for details'
    );
  }

  clearCart() {
    const deleteItemsLoop = () => {
      cy.get('body').then($body => {
        const hasDelete = $body.find(this.DELETE_BUTTON).length > 0;
        if (hasDelete) {
          this.firstClick(this.DELETE_BUTTON);
          cy.wait(2000);
          deleteItemsLoop();
        } else {
          cy.reload();
          cy.contains(this.EMPTY_CART_TEXT, { timeout: 10000 }).should('be.visible');
        }
      });
    };

    deleteItemsLoop();
  }
}
