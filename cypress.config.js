const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    sspecPattern: [
      "cypress/integration/**/*.{js,jsx,ts,tsx}",
      "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    ],
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    supportFile: false, // Set supportFile to false
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // video: true,
    // any additional configurations
  },
  component: {
    // Component testing specific configurations (if used)
  },
  // Other global configurations can be added here
});
