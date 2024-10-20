const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  experimentalStudio:true,
  defaultCommandTimeout:6000,
  pageLoadTimeout:12000,
  taskTimeout:6000,
  video:true,
  screenshotOnRunFailure:true,
  retries:{
    runMode:2,
    openMode:2
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
