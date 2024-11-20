import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:"https://demoqa.com/",
    env:{

    },
  },
  defaultCommandTimeout: 16_000,
  
});
