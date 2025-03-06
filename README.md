# jeffscotti.net - Personal Website

This is the source code for Jeff Scotti's personal website, built with Astro.

## 🚀 Project Structure

```text
/
├── public/              # Static assets that are copied directly to the build output
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

## 🌐 Server-Side Rendering

This site uses Astro's server-side rendering (SSR) capabilities for API routes and dynamic content. The `output: 'server'` configuration in `astro.config.mjs` enables SSR, and the `@astrojs/node` adapter is used to generate a Node.js server.

### Node.js Adapter

The Node.js adapter is configured in `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
```

## 🚀 Deployment

This site is deployed to DreamHost using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

### Deployment Configuration

The deployment uses the `SamKirkland/FTP-Deploy-Action@4.3.0` GitHub Action to deploy the site via FTP. The configuration includes:

- `dangerous-clean-slate: false` - Prevents deletion of files on the server that don't exist locally
- `exclude` - Excludes certain files/directories from being deleted
- `state-name` - Maintains state between deployments
- `log-level: verbose` - Provides detailed logs for debugging

### Manual Restore

If you need to manually restore the site, you can use the `restore-site.js` script:

```bash
node restore-site.js
```

This script will:
1. Install dependencies
2. Build the site
3. Deploy it to DreamHost via FTP with the same configuration as the GitHub workflow

The script requires the following environment variables in your `.env` file:
- `FTP_SERVER` - The FTP server hostname
- `FTP_USERNAME` - The FTP username
- `FTP_PASSWORD` - The FTP password
- `FTP_REMOTE_PATH` - The remote path on the FTP server

### Deployment Options

#### Option 1: Using Node.js (if DreamHost supports Node.js)

If DreamHost supports running Node.js applications, you can deploy the entire `dist/` directory and run the Node.js server. See the `dist/README.md` file for detailed instructions.

#### Option 2: Using Static Site (if DreamHost doesn't support Node.js)

If DreamHost doesn't support running Node.js applications, you may need to:

1. Change the Astro configuration to use static site generation instead of server-side rendering
2. Remove the server-side API routes or implement them using a different approach (e.g., serverless functions)
3. Build the site and deploy only the static assets

## 📝 Notes

- The site uses SCSS for styling
- API routes are located in `src/pages/api/`
- Environment variables are managed in `.env` and `.env.production` files (not committed to the repository)
