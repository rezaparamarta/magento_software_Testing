const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://magento.softwaretestingboard.com/',
    profileUrl: 'https://magento.softwaretestingboard.com/customer/account/',
  },
  chromeWebSecurity: false,
  viewportHeight: 660,
  viewportWidth: 1000,
  defaultCommandTimeout: 5000,
  defaultBrowser: 'chrome',
});
