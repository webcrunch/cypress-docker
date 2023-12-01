const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    supportFile: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});