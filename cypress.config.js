const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = defineConfig({
  e2e: {
    env: {
      host: process.env.BASE_URL,
      default_password: process.env.DEFAULT_PASSWORD
    },
    baseUrl: 'http://127.0.0.1:3000'
  }
});
