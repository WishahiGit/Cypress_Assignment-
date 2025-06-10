const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

console.log(" Cypress config loaded!");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  env: {
    hideXHR: true,
    allure: true,
    email: 'wishahi.saber@gmail.com',
    password: 'A1A1A1'
  }
});
