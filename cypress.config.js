const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uzrg5b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
