const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'q2yud3',
  e2e: {

    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    }
  },
});
