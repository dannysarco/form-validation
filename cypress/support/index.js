// cypress/support/index.js

// Base URL for the application
Cypress.env({
  baseUrl: "http://localhost:8000",
});

// Import and register custom commands
// import './commands';

// Import utility functions or helpers
// import { generateRandomString, formatDate } from './utils';

// Set up global variables or environment variables
// Cypress.env('apiUrl', 'https://api.example.com');
// Cypress.env('appUrl', 'https://www.example.com');

// Configure Cypress plugins (if any)
// on('file:preprocessor', pluginConfig);

// Override or extend Cypress default behavior
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   // Custom logic for the overwritten visit command
//   return originalFn(url, options);
// });

// Define custom utility commands
// Cypress.Commands.add('generateString', (length) => {
//   return generateRandomString(length);
// });

// Cypress.Commands.add('formatDate', (date) => {
//   return formatDate(date);
// });

// Load test data or fixtures
// Cypress.fixture('testData').then((data) => {
//   // Make the test data available globally
//   Cypress.env('testData', data);
// });

// Set up global event listeners or handlers
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Handle uncaught exceptions
//   return false;
// });
