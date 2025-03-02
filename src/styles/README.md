# Styling Guide for Jeff Scotti's Website

This document outlines the hybrid styling approach used in this Astro project, which combines global SCSS files with component-specific styles.

## Styling Architecture

The project uses a hybrid approach to styling:

1. **Global Styles**: Defined in SCSS files and imported in the main Layout component
2. **Component-Specific Styles**: Scoped styles within each component
3. **CSS Variables**: Used for theming and consistent design tokens

## Global Style Files

Global styles are organized into the following files:

- **variables.scss**: CSS custom properties and SCSS variables for theming
- **base.scss**: Basic reset, typography, and element styling
- **utilities.scss**: Utility classes for spacing, alignment, buttons, etc.
- **layout.scss**: Grid system, containers, and layout components

These files are imported in `Layout.astro` to ensure they're available throughout the site.

## Component-Specific Styles

Components use Astro's built-in scoped styles for component-specific styling:

```astro
<Component>
  <!-- Component markup -->
</Component>

<style>
  /* Component-specific styles */
</style>
```

## CSS Variables

The project uses CSS custom properties (variables) for theming, defined in `variables.scss`. These variables are available globally and can be used in both global SCSS files and component-specific styles.

Example usage in a component:

```astro
<style>
  .my-component {
    color: var(--text-color);
    background-color: var(--background-color);
    padding: var(--spacing-md);
  }
</style>
```

## Best Practices

1. **Use global styles for**:

   - Reset and base styles
   - Typography
   - Color schemes
   - Layout grids
   - Utility classes

2. **Use component styles for**:

   - Component-specific layout
   - Component-specific variations
   - Interactive states
   - Component-specific responsive adjustments

3. **When to use which**:

   - If a style is used across multiple components, put it in a global file
   - If a style is specific to a single component, use scoped styles
   - Use CSS variables for any value that might need to be changed globally

4. **Naming Conventions**:
   - Use kebab-case for class names
   - Prefix utility classes with their purpose (e.g., `.mb-1` for margin-bottom)
   - Use BEM-like naming for component classes when appropriate

## Adding New Styles

### Adding Global Styles

1. Determine which global file is appropriate for your style
2. Add the style to the appropriate file
3. Use existing variables where possible

### Adding Component Styles

1. Add a `<style>` tag to your component
2. Write component-specific styles
3. Reference global variables for consistency

## Theme Customization

To customize the theme:

1. Modify the CSS custom properties in `variables.scss`
2. All components and global styles will automatically reflect the changes
