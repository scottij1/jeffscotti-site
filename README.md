# jeffscotti.net - Personal Website

This is the source code for Jeff Scotti's personal website, built with Astro.

## 🚀 Project Structure

```text
/
├── public/              # Static assets that are copied directly to the build output
│   ├── fonts/           # Web fonts (Poppins, et-line)
│   ├── js/              # JavaScript libraries (jQuery, Three.js, Vanta)
│   ├── styles/          # CSS files
│   └── testimonials/    # Testimonial images
├── src/
│   ├── assets/          # Assets that are processed by Astro
│   ├── components/      # Reusable Astro components
│   ├── data/            # Data files used in the site
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components and API routes
│   │   └── api/         # API routes
│   └── styles/          # SCSS styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔄 Static vs. Server-Side Rendering

This site can be built in two modes:

### Current Mode: Static Site Generation

The site is currently configured to use static site generation (SSG) as specified in `astro.config.mjs`

In static mode:
- The entire site is pre-rendered to HTML at build time
- No Node.js server is required for hosting
- API routes (like the contact form) require special handling

### Alternative: Server-Side Rendering

The site can also be configured for server-side rendering (SSR) which enables dynamic API routes like the contact form handler.

To switch between modes, use the provided script:

```bash
# Switch to static site generation
node switch-mode.js static

# Switch to server-side rendering
node switch-mode.js ssr
```

After switching modes, rebuild the site with `npm run build`.

## 📧 Contact Form

### Current Implementation: FormSubmit.co

The site currently uses [FormSubmit.co](https://formsubmit.co/) as a simple, quick solution for handling form submissions in static mode. This is implemented in `src/pages/contact.astro`:

### Alternative: Nodemailer Implementation

The site also includes a Nodemailer-based contact form implementation that can be used with server-side rendering. However, this requires:

1. A DreamHost plan upgrade to include a Virtual Private Server (VPS) to support a Node.js environment
2. Switching to SSR mode using the `switch-mode.js` script

If you decide to use the Nodemailer implementation, you'll need these environment variables in your `.env` file:

```
SMTP_HOST=smtp.dreamhost.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=recipient@example.com
GA_MEASUREMENT_ID=your-ga-id
GA_TAG_ID=your-tag-id
```

The infrastructure is in place to support Nodemailer in the future when a VPS is available.

## 🎨 Styling

The site uses:
- SCSS for styling (in `src/styles/`)
- Poppins font family
- et-line icon font (for skills tabs)
- font awesome icons 
- Vanta.js for the animated background

## 🚀 Deployment

### GitHub Actions Automated Deployment

The site is automatically deployed through GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/deploy.yml`.

The deployment process:

1. Checks out the code
2. Sets up Node.js 18.19.0
3. Installs dependencies
4. Builds the site using `npm run build`
5. Creates a custom `.htaccess` file for the static site
6. Verifies the build output
7. Deploys the site via FTP using the SamKirkland/FTP-Deploy-Action

The GitHub Actions workflow uses the following secrets:
- `FTP_SERVER` - The FTP server hostname
- `FTP_USERNAME` - The FTP username
- `FTP_PASSWORD` - The FTP password
- `FTP_REMOTE_PATH` - The remote path on the FTP server

### Manual Deployment

If you need to manually deploy the site:

1. Build the site:
   ```bash
   npm run build
   ```

2. The built site will be in the `dist/` directory, which can be deployed to any static hosting service

### Manual Restore

For emergency situations, you can use the `restore-site.js` script to manually restore the site:

```bash
node restore-site.js
```

This script requires the same environment variables in your `.env` file that are used by the GitHub Actions workflow.

## 📝 Notes

- The site uses SCSS for styling with variables defined in `src/styles/variables.scss`
- The Vanta.js background is configured in `src/components/VantaBackground.astro`
- Testimonials data is stored in `src/data/testimonials.ts`
- The site includes a theme toggle for light/dark mode
