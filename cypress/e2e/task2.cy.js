import { BaseTest } from './BaseTest';

//The requested color of the Pencil Sharpener was Blue (EPS4-BLUE).
//Since the exact product was not available and the similar color option was listed under "Buying Options,"
//I went ahead and selected the same product in a slightly darker shade: Blue Chrome Metallic.
const PRODUCT_NAME = 'Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue Chrome Metallic';

describe('Task 2 - Add items to cart flow', () => {
  const test = new BaseTest();

  beforeEach(() => {
    test.login();
  });

  it('Add two products to cart, validate shipping eligibility, then clear the cart', () => {
    cy.allure().step('Search for the electric pencil sharpener');
    test.searchPage.searchForItem(PRODUCT_NAME);

    cy.allure().step('Click on the exact electric pencil sharpener product');
    test.productPage.clickOnExactProduct(PRODUCT_NAME);

    cy.wait(5000);

    cy.allure().step('Add first product to cart');
    test.productPage.clickAddToCart();
    test.productPage.validateAddedToCart(1);

    cy.allure().step('Visit second product page (scissors)');
    test.productPage.goToScissorsProductPage();

    cy.allure().step('Select color and validate change');
    test.productPage.selectColorAndValidateChange();

    cy.wait(5000);

    cy.allure().step('Add second product to cart');
    test.productPage.clickAddToCart();
    test.productPage.validateAddedToCart(2);

    cy.wait(5000);

    cy.allure().step('Go to cart page');
    test.cartPage.goToCart();

    test.cartPage.validateItemInCart('Electric Pencil Sharpener');
    test.cartPage.validateItemInCart('Scissors All Purpose');

    test.cartPage.validateNoFreeShippingMessage();

    cy.allure().step('Update quantity to 4 and validate free shipping appears');
    test.cartPage.updateQuantityToFour('Pencil Sharpener');
    test.cartPage.validateFreeShippingAppears();

    cy.allure().step('Clear the cart');
    test.cartPage.clearCart();
  });
});
