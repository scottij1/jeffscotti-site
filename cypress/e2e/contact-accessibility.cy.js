/// <reference types="cypress" />
/// <reference types="wick-a11y" />

describe('Contact Page Accessibility Tests', () => {
  beforeEach(() => {
    // Visit the contact page
    cy.visit('/contact');
  });

  it('Contact page should be accessible', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check with default settings (critical and serious violations)
    cy.checkAccessibility();
  });

  it('Contact form should be accessible', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check on the form only
    cy.get('form').then((form) => {
      cy.checkAccessibility(form, {
        includedImpacts: ['critical', 'serious', 'moderate', 'minor']
      });
    });
  });

  it('Should check for color contrast issues', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check focusing on color contrast rules
    cy.checkAccessibility(null, {
      runOnly: ['color-contrast']
    });
  });
});
