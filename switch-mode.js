#!/usr/bin/env node

/**
 * This script switches between SSR and static site generation modes
 * Usage:
 *   node switch-mode.js ssr    # Switch to server-side rendering
 *   node switch-mode.js static # Switch to static site generation
 */

const fs = require('fs');
const path = require('path');

// Configuration files
const ssrConfigPath = path.join(__dirname, 'astro.config.mjs');
const staticConfigPath = path.join(__dirname, 'static-astro.config.mjs');
const backupConfigPath = path.join(__dirname, 'astro.config.backup.mjs');

// Check command line arguments
const args = process.argv.slice(2);
if (args.length !== 1 || (args[0] !== 'ssr' && args[0] !== 'static')) {
  console.error('Usage:');
  console.error('  node switch-mode.js ssr    # Switch to server-side rendering');
  console.error('  node switch-mode.js static # Switch to static site generation');
  process.exit(1);
}

const mode = args[0];

try {
  // Backup current configuration
  if (fs.existsSync(ssrConfigPath)) {
    fs.copyFileSync(ssrConfigPath, backupConfigPath);
    console.log(`✅ Current configuration backed up to ${backupConfigPath}`);
  }

  if (mode === 'ssr') {
    // Check if backup exists
    if (fs.existsSync(backupConfigPath)) {
      fs.copyFileSync(backupConfigPath, ssrConfigPath);
      console.log('✅ Switched to server-side rendering mode');
    } else {
      console.error('❌ No backup configuration found. Cannot switch to SSR mode.');
      process.exit(1);
    }
  } else if (mode === 'static') {
    // Check if static config exists
    if (fs.existsSync(staticConfigPath)) {
      fs.copyFileSync(staticConfigPath, ssrConfigPath);
      console.log('✅ Switched to static site generation mode');
    } else {
      console.error('❌ Static configuration not found. Cannot switch to static mode.');
      process.exit(1);
    }
  }

  console.log('\n🚀 Next steps:');
  console.log('1. Run "npm run build" to rebuild your site');
  console.log('2. Deploy the updated build to your server');
  
  if (mode === 'static') {
    console.log('\n⚠️ Note: Static mode will not support API routes or server-side rendering.');
    console.log('   You may need to modify your site to work without these features.');
  } else {
    console.log('\n⚠️ Note: SSR mode requires a running Node.js server on your hosting provider.');
    console.log('   Make sure your server is properly configured to run the Node.js server.');
  }

} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}

//TODO: This is mostly working, even if SSR isn't... 