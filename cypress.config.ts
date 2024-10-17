import { defineConfig } from 'cypress';
import browserify from '@cypress/browserify-preprocessor';
import cucumber from 'cypress-cucumber-preprocessor'; // Use * as to import correctly

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      options.typescript = require.resolve('typescript');
      on('file:preprocessor', cucumber.default()); // Use .default() to call the function
      on('file:preprocessor', browserify(options));
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
