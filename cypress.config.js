const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    env: {
      host: process.env.BASE_URL,
      default_password: process.env.DEFAULT_PASSWORD
    }
  }
});
