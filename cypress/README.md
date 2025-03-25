# Accessibility Testing with wick-a11y

This project uses [wick-a11y](https://github.com/sclavijosuero/wick-a11y), a Cypress plugin for accessibility testing. It leverages the axe-core library to perform comprehensive accessibility checks and provides detailed reports.

## Running Accessibility Tests

### Start the Development Server

First, start the Astro development server:

```bash
npm run dev
```

### Run Cypress Tests

In a separate terminal, run Cypress in one of the following ways:

#### Open Cypress UI (Recommended for Development)

```bash
npx cypress open
```

This will open the Cypress Test Runner, where you can select and run individual tests. The Test Runner provides a visual interface that shows the test execution and highlights accessibility issues directly on the page.

#### Run Headless Tests

```bash
npx cypress run --spec "cypress/e2e/*accessibility*.cy.js"
```

This will run all accessibility test files in headless mode.

## Test Structure

The accessibility tests are organized by page/component:

- `accessibility.cy.js` - General accessibility tests for the home page
- `contact-accessibility.cy.js` - Tests for the contact page and form
- `projects-accessibility.cy.js` - Tests for the projects page and individual project pages

## Accessibility Reports

After running the tests, HTML reports with screenshots of accessibility violations will be generated in the `cypress/accessibility` folder. These reports provide detailed information about each violation, including:

- Severity level (critical, serious, moderate, minor)
- Description of the issue
- Affected DOM elements
- Suggestions for fixing the issue

## Configuration

The accessibility testing configuration is defined in `cypress.config.js`. Key settings include:

- `accessibilityFolder`: Where reports are saved
- `enableAccessibilityVoice`: Whether to enable voice feedback (only in Cypress UI)

## Customizing Tests

You can customize the accessibility tests by modifying the options passed to the `cy.checkAccessibility()` command:

```javascript
cy.checkAccessibility(context, options);
```

### Common Options

- `includedImpacts`: Severity levels that will cause the test to fail (e.g., `['critical', 'serious']`)
- `onlyWarnImpacts`: Severity levels that will only show warnings (e.g., `['moderate', 'minor']`)
- `runOnly`: Specific rules or standards to check (e.g., `['wcag2a', 'wcag2aa']` or `['color-contrast']`)
- `rules`: Enable/disable specific rules (e.g., `{ 'color-contrast': { enabled: false } }`)

For more details, refer to the [wick-a11y documentation](https://github.com/sclavijosuero/wick-a11y).
