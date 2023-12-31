const { defineConfig } = require("cypress");
const { baseUrl } = require('../../base-url.js');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.aftonbladet.se/',
        video: false,
        supportFile: false,
        screenshotOnRunFailure: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
