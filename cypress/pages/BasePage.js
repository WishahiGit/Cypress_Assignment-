class BasePage {
  click(locator) {
    cy.get(locator, { timeout: 10000 }).click();
  } 

  firstClick(locator) {
  cy.get(locator).first().click();
}

  clickByXpath(xpathLocator) {
    cy.xpath(xpathLocator, { timeout: 10000 }).click();
  }

  fillText(locator, txt, options = {}) {
    cy.get(locator, { timeout: 10000 }).clear().type(txt, options);
  }

  fillTextByXpath(xpathLocator, txt, options = {}) {
    cy.xpath(xpathLocator, { timeout: 10000 }).clear().type(txt, options);
  }

  getText(locator) {
    return cy.get(locator, { timeout: 10000 }).invoke('text');
  }

  getTextByXpath(xpathLocator) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).invoke('text');
  }

  select(locator, value) {
    cy.get(locator, { timeout: 10000 }).select(value);
  }

  getAttribute(locator, attribute) {
    return cy.get(locator, { timeout: 10000 }).invoke('attr', attribute);
  }

  getAttributeByXpath(xpathLocator, attribute) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).invoke('attr', attribute);
  }

  isVisible(locator) {
    return cy.get(locator, { timeout: 10000 }).should('be.visible');
  }

  isVisibleByXpath(xpathLocator) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).should('be.visible');
  }

  isEnabled(locator) {
    return cy.get(locator, { timeout: 10000 }).should('not.be.disabled');
  }

  isEnabledByXpath(xpathLocator) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).should('not.be.disabled');
  }

  isChecked(locator) {
    return cy.get(locator, { timeout: 10000 }).should('be.checked');
  }

  isCheckedByXpath(xpathLocator) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).should('be.checked');
  }

  pressKey(locator, key) {
    cy.get(locator, { timeout: 10000 }).type(`{${key}}`);
  }

  pressKeyByXpath(xpathLocator, key) {
    cy.xpath(xpathLocator, { timeout: 10000 }).type(`{${key}}`);
  }

  hover(locator) {
    cy.get(locator, { timeout: 10000 }).trigger('mouseover');
  }

  hoverByXpath(xpathLocator) {
    cy.xpath(xpathLocator, { timeout: 10000 }).trigger('mouseover');
  }

  inputValue(locator) {
    return cy.get(locator, { timeout: 10000 }).invoke('val');
  }

  inputValueByXpath(xpathLocator) {
    return cy.xpath(xpathLocator, { timeout: 10000 }).invoke('val');
  }

  waitForVisibility(locator, timeout = 10000) {
    cy.get(locator, { timeout }).should('be.visible');
  }

  waitForVisibilityByXpath(xpathLocator, timeout = 10000) {
    cy.xpath(xpathLocator, { timeout }).should('be.visible');
  }

  waitForHidden(locator, timeout = 10000) {
    cy.get(locator, { timeout }).should('not.be.visible');
  }

  waitForHiddenByXpath(xpathLocator, timeout = 10000) {
    cy.xpath(xpathLocator, { timeout }).should('not.be.visible');
  }

  validateText(locator, expectedText) {
  cy.get(locator, { timeout: 10000 }).should('contain.text', expectedText);
  }
  
  validateNoText(locator, expectedText) {
  cy.get(locator, { timeout: 10000 }).should('not.contain.text', expectedText);
  }
  
  getCurrentUrl() {
    return cy.url();
  }
}

export default BasePage;
