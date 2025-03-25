import { defineConfig } from 'cypress';
import addAccessibilityTasks from 'wick-a11y/accessibility-tasks';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addAccessibilityTasks(on);
      return config;
    },
    baseUrl: 'http://localhost:4321',
    defaultCommandTimeout: 15000, // Increased timeout for accessibility tests
  },
  accessibilityFolder: 'cypress/accessibility',
  env: {
    enableAccessibilityVoice: true
  }
});
