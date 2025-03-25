/// <reference types="cypress" />
/// <reference types="wick-a11y" />

describe('Accessibility Tests', () => {
  beforeEach(() => {
    // Start the Astro dev server before running tests
    cy.visit('/');
  });

  it('Home page should be accessible', { defaultCommandTimeout: 15000 }, () => {
    // Wait for page to fully load
    cy.wait(2000);
    
    // Run accessibility check with default settings (critical and serious violations)
    cy.checkAccessibility();
  });

  it('Header component should be accessible', { defaultCommandTimeout: 15000 }, () => {
    // Wait for page to fully load
    cy.wait(2000);
    
    // Run accessibility check on the header component only
    cy.checkAccessibility('#site_header', {
      includedImpacts: ['critical', 'serious', 'moderate', 'minor']
    });
  });

  it('Should check for all severity levels but only warn (not fail)', { defaultCommandTimeout: 15000 }, () => {
    // Wait for page to fully load
    cy.wait(2000);
    
    // Run accessibility check with all severity levels as warnings
    cy.checkAccessibility(null, {
      includedImpacts: [],
      onlyWarnImpacts: ['critical', 'serious', 'moderate', 'minor']
    });
  });
});
