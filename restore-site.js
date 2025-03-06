#!/usr/bin/env node

/**
 * Manual site restore script
 * 
 * This script rebuilds and deploys the site to DreamHost via FTP.
 * It can be used to quickly restore the site if needed.
 * 
 * Usage:
 *   node restore-site.js
 * 
 * Requirements:
 *   - Node.js 18.19.0 or higher
 *   - FTP credentials in .env file
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const requiredEnvVars = ['FTP_SERVER', 'FTP_USERNAME', 'FTP_PASSWORD', 'FTP_REMOTE_PATH'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Error: Missing required environment variables: ${missingEnvVars.join(', ')}`);
  console.error('Please add these variables to your .env file');
  process.exit(1);
}

// Create temporary GitHub Actions workflow file
const tempDir = path.join(__dirname, 'temp');
const workflowDir = path.join(tempDir, '.github', 'workflows');

if (!fs.existsSync(workflowDir)) {
  fs.mkdirSync(workflowDir, { recursive: true });
}

const workflowFile = path.join(workflowDir, 'manual-deploy.yml');
const workflowContent = `
name: Manual Deploy to DreamHost

on: workflow_dispatch

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18.19.0"

      - name: Install dependencies
        run: npm install

      - name: Build Astro Site
        run: npm run build

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: \${{ secrets.FTP_SERVER }}
          username: \${{ secrets.FTP_USERNAME }}
          password: \${{ secrets.FTP_PASSWORD }}
          local-dir: dist/
          server-dir: \${{ secrets.FTP_REMOTE_PATH }}
          dangerous-clean-slate: false
          exclude: |
            **/.git*
            **/.git*/**
            **/node_modules/**
          state-name: .ftp-deploy-sync-state.json
          log-level: verbose
`;

fs.writeFileSync(workflowFile, workflowContent);

// Main function
async function main() {
  try {
    console.log('🚀 Starting site restore process...');

    // Step 1: Install dependencies
    console.log('\n📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    // Step 2: Build the site
    console.log('\n🏗️ Building the site...');
    execSync('npm run build', { stdio: 'inherit' });

    // Step 3: Deploy to DreamHost via FTP
    console.log('\n🚀 Deploying to DreamHost...');
    
    // Use FTP-Deploy-Action CLI if available, otherwise use a simple FTP client
    try {
      // Install ftp-deploy if not already installed
      if (!fs.existsSync(path.join(__dirname, 'node_modules', 'ftp-deploy'))) {
        console.log('Installing ftp-deploy...');
        execSync('npm install ftp-deploy', { stdio: 'inherit' });
      }
      
      // Create server files
      console.log('\n📝 Creating server files...');
      
      // Create start.js
      const startJsPath = path.join(__dirname, 'dist', 'start.js');
      fs.writeFileSync(startJsPath, `#!/usr/bin/env node

/**
 * This script starts the Astro SSR server
 */

import { startServer } from './server/entry.mjs';

// Set default port and host
const PORT = process.env.PORT || 4321;
const HOST = process.env.HOST || '127.0.0.1';

// Start the server
startServer({
  port: PORT,
  host: HOST
})
  .then(({ server }) => {
    console.log(\`Server running at http://\${HOST}:\${PORT}\`);
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });`);
      
      // Create .htaccess
      const htaccessPath = path.join(__dirname, 'dist', '.htaccess');
      fs.writeFileSync(htaccessPath, `# Enable the RewriteEngine
RewriteEngine On

# If the request is for an existing file or directory, serve it directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# For static assets in the client directory, serve them directly
RewriteRule ^client/(.*)$ client/$1 [L]

# For all other requests, proxy to the Node.js server
# Note: You'll need to replace 127.0.0.1:4321 with the actual address and port of your Node.js server
RewriteRule ^(.*)$ http://127.0.0.1:4321/$1 [P,L]

# Set some headers for proxied content
<IfModule mod_headers.c>
    Header set X-Powered-By "Astro"
</IfModule>`);
      
      // Create start.sh
      const startShPath = path.join(__dirname, 'dist', 'start.sh');
      fs.writeFileSync(startShPath, `#!/bin/bash

# Change to the directory containing this script
cd "$(dirname "$0")"

# Set environment variables
export PORT=4321
export HOST=127.0.0.1

# Start the server
node start.js`);
      
      // Create package.json
      const packageJsonPath = path.join(__dirname, 'dist', 'package.json');
      fs.writeFileSync(packageJsonPath, JSON.stringify({
        name: "jeffscotti-site-server",
        type: "module",
        version: "1.0.0",
        private: true,
        scripts: {
          start: "node start.js",
          test: "node test.js"
        },
        engines: {
          node: ">=18.19.0"
        }
      }, null, 2));
      
      // Create test.js
      const testJsPath = path.join(__dirname, 'dist', 'test.js');
      fs.writeFileSync(testJsPath, `#!/usr/bin/env node

/**
 * This script tests if the server is running correctly
 */

import http from 'http';

const PORT = process.env.PORT || 4321;
const HOST = process.env.HOST || '127.0.0.1';

console.log(\`Testing server at http://\${HOST}:\${PORT}...\`);

const req = http.request({
  host: HOST,
  port: PORT,
  path: '/',
  method: 'GET',
  timeout: 5000
}, (res) => {
  console.log(\`Server responded with status code: \${res.statusCode}\`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response received successfully');
    console.log(\`Response size: \${data.length} bytes\`);
    console.log('Server is running correctly!');
    process.exit(0);
  });
});

req.on('error', (err) => {
  console.error('Error connecting to server:', err.message);
  console.error('Make sure the server is running with: npm start');
  process.exit(1);
});

req.on('timeout', () => {
  console.error('Request timed out');
  req.destroy();
  process.exit(1);
});

req.end();`);
      
      // Make scripts executable
      try {
        fs.chmodSync(startJsPath, '755');
        fs.chmodSync(startShPath, '755');
        fs.chmodSync(testJsPath, '755');
      } catch (err) {
        console.warn('Warning: Could not make scripts executable. You may need to do this manually on the server.');
      }
      
      // Verify build output before deployment
      console.log('\n🔍 Verifying build output...');
      
      // List build output directories
      console.log('Dist directory contents:');
      fs.readdirSync(path.join(__dirname, 'dist')).forEach(file => {
        console.log(`- ${file}`);
      });
      
      console.log('\nClient directory contents:');
      fs.readdirSync(path.join(__dirname, 'dist', 'client')).forEach(file => {
        console.log(`- ${file}`);
      });
      
      // Only check for the _astro directory which should always be present
      const astroDir = path.join(__dirname, 'dist', 'client', '_astro');
      if (!fs.existsSync(astroDir)) {
        console.error(`❌ Critical directory missing: dist/client/_astro`);
        process.exit(1);
      }
      
      // List server directory contents for debugging
      console.log('\nServer directory contents:');
      fs.readdirSync(path.join(__dirname, 'dist', 'server')).forEach(file => {
        console.log(`- ${file}`);
      });
      
      console.log('✅ Build verification completed successfully.');
      
      const ftpConfig = {
        user: process.env.FTP_USERNAME,
        password: process.env.FTP_PASSWORD,
        host: process.env.FTP_SERVER,
        port: 21,
        localRoot: path.join(__dirname, 'dist'),
        remoteRoot: process.env.FTP_REMOTE_PATH,
        include: ['*', '**/*'],
        exclude: ['.git*', '.git*/**', 'node_modules/**'],
        deleteRemote: false, // Important: Don't delete remote files
        forcePasv: true
      };
      
      const configPath = path.join(tempDir, 'ftp-config.json');
      fs.writeFileSync(configPath, JSON.stringify(ftpConfig, null, 2));
      
      const FtpDeploy = require('ftp-deploy');
      const ftpDeploy = new FtpDeploy();
      
      ftpDeploy.on('uploading', function(data) {
        console.log(`Uploading: ${data.filename}`);
      });
      
      ftpDeploy.on('uploaded', function(data) {
        console.log(`Uploaded: ${data.filename}`);
      });
      
      ftpDeploy.on('log', function(data) {
        console.log(data);
      });
      
      await ftpDeploy.deploy(ftpConfig);
      
    } catch (err) {
      console.error('Error deploying via FTP:', err);
      process.exit(1);
    }

    console.log('\n✅ Site restore completed successfully!');
    
    // Clean up
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    
  } catch (error) {
    console.error('❌ Error restoring site:', error);
    process.exit(1);
  }
}

main();
