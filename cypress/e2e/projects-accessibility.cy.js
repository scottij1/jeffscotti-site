/// <reference types="cypress" />
/// <reference types="wick-a11y" />

describe('Projects Page Accessibility Tests', () => {
  beforeEach(() => {
    // Visit the projects page
    cy.visit('/projects');
  });

  it('Projects page should be accessible', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check with default settings (critical and serious violations)
    cy.checkAccessibility();
  });

  it('Project gallery should be accessible', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check on the gallery component if it exists
    cy.get('.project-gallery, [data-cy="project-gallery"]').then((gallery) => {
      if (gallery.length > 0) {
        cy.checkAccessibility(gallery, {
          includedImpacts: ['critical', 'serious', 'moderate', 'minor']
        });
      } else {
        cy.log('No project gallery found, skipping test');
      }
    });
  });

  it('Should check for keyboard navigation issues', { defaultCommandTimeout: 15000 }, () => {
    cy.wait(2000);
    
    // Run accessibility check focusing on keyboard navigation rules
    cy.checkAccessibility(null, {
      runOnly: ['keyboard']
    });
  });

  // Test a specific project page if available
  it('Individual project page should be accessible', { defaultCommandTimeout: 15000 }, () => {
    // Get the first project link and visit it
    cy.get('a[href*="/projects/"]').first().then(($link) => {
      const href = $link.attr('href');
      if (href) {
        cy.visit(href);
        cy.wait(2000);
        cy.checkAccessibility();
      } else {
        cy.log('No project links found, skipping test');
      }
    });
  });
});
