const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000, // waits 10 seconds for commands like cy.get()
    pageLoadTimeout: 60000, // waits 60 seconds for page loads
    requestTimeout: 5000, // waits 5 seconds for cy.request()
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },
});
