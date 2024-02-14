const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    supportFile: "cypress/support/index.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    // any additional configurations
  },
  component: {
    // Component testing specific configurations (if used)
  },
  // Other global configurations can be added here
});
