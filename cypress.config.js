const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://codeleap-frontend-test.netlify.app/',
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
