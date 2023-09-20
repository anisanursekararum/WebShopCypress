const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
