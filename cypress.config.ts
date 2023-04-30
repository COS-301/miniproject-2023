import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'r5dref',
  e2e: {
    baseUrl: 'http://localhost:4200',//'https://cos-301-memory-lane.web.app',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
  },
});
