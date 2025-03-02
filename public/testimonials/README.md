# Testimonials Images

This directory is for storing testimonial profile images. The images should be:

- Square format (1:1 aspect ratio)
- Recommended size: 160x160 pixels
- Supported formats: JPG, PNG
- Named according to the pattern: `testimonial-1.jpg`, `testimonial-2.jpg`, etc.

## Adding New Testimonials

1. Add your testimonial image to this directory
2. Update the `testimonials.ts` file in `src/data/testimonials.ts` with the new testimonial information
3. Make sure the image path in the testimonial data matches the filename in this directory

Example:
```typescript
{
  id: 4,
  name: "New Client",
  company: "New Company",
  image: "/testimonials/testimonial-4.jpg", // This should match your image filename
  text: "Your testimonial text here."
}
```

## Image Sources

You can use real client photos or placeholder images from services like:
- https://randomuser.me/
- https://placekitten.com/
- https://picsum.photos/

For best results, use square images with dimensions of at least 160x160 pixels.
