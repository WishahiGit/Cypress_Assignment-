import '@shelex/cypress-allure-plugin';
require('cypress-xpath');

if (Cypress.env('hideXHR')) {
  const app = window.top;
  if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr, .command-name-fetch { display: none }';
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
  }
}

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('config.ewc.flyout.loadEwcContent is not a function') ||
    err.message.includes('Cannot read properties of null') ||
    err.message.includes('is not a function')
  ) {
    return false;
  }
  return true;
});
