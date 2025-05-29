# CSS and SCSS Hybrid Approach

This project uses a hybrid approach for styling, combining native CSS and SCSS files. This document explains the approach and provides guidelines for future development.

## File Organization

### Native CSS Files

The following files have been converted to native CSS:

- `theme.css` - Theme variables for light and dark modes
- `base.css` - Basic styles for HTML and body elements
- `welcome.css` - Styles for the welcome component

These files are imported directly in `Layout.astro`.

### SCSS Files

The following files remain as SCSS due to their use of SCSS-specific features:

- `variables.scss` - Source of SCSS variables needed for @extend
- `common.scss` - Uses @extend for button variants and other components
- `typography.scss` - Typography styles
- `utilities.scss` - Utility classes
- `layout.scss` - Layout styles
- `footer.scss` - Footer styles
- `header.scss` - Header styles

These files are imported through `main.scss`.

## Import System

- Native CSS files are imported directly in `Layout.astro`
- SCSS files are imported through `main.scss`

## Guidelines for Future Development

### When to Use Native CSS

Use native CSS for:

- Simple components with straightforward styling
- Files that don't need to extend other components
- New components that don't depend on existing SCSS components

### When to Use SCSS

Use SCSS for:

- Components that need to extend other components using `@extend`
- Components with complex nesting that might not be well-supported in native CSS
- Components that need to use SCSS variables or mixins