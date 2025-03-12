const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy{js,jsx,ts,tsx}"],
    stepDefinitions: 'cypress/e2e/step_definitions/produtos/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
});
