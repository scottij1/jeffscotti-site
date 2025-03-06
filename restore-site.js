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
