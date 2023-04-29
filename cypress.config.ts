import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://cos-301-memory-lane.web.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
