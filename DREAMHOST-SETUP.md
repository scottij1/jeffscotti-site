# DreamHost Setup Guide for Astro SSR

This guide provides detailed instructions for setting up your Astro SSR site on DreamHost and troubleshooting common issues.

## Current Issue: 500 Internal Server Error

If you're seeing a 500 Internal Server Error, this indicates that the server is encountering an error when processing your request. Here are the most likely causes and solutions:

### 1. Node.js Server Not Running

The most common cause is that the Node.js server is not running on your DreamHost account.

**Solution:**
1. SSH into your DreamHost server:
   ```
   ssh username@your-dreamhost-server.com
   ```

2. Navigate to your website directory:
   ```
   cd /home/username/jeffscotti.net
   ```

3. Make the start script executable:
   ```
   chmod +x start.sh
   ```

4. Start the server manually to check for errors:
   ```
   ./start.sh
   ```
   
   If you see any error messages, they will help diagnose the issue.

### 2. Node.js Not Installed or Wrong Version

**Solution:**
1. Install Node.js using NVM:
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install 18.19.0
   ```

2. Verify Node.js is installed:
   ```
   node -v
   ```

### 3. Apache Proxy Configuration Issues

DreamHost may not have the necessary Apache modules enabled for proxying requests to your Node.js server.

**Solution:**
1. Contact DreamHost support and ask them to:
   - Enable mod_proxy and mod_proxy_http modules
   - Verify that your .htaccess file is being processed correctly
   - Check Apache error logs for specific error messages

2. Alternatively, you can try a simpler .htaccess configuration:
   ```
   # Create a simpler .htaccess file
   cat > .htaccess << 'EOL'
   RewriteEngine On
   RewriteRule ^client/(.*)$ client/$1 [L]
   RewriteRule ^(.*)$ http://localhost:4321/$1 [P,L]
   EOL
   ```

### 4. Process Management

For a production site, you should use a process manager like PM2 to keep your Node.js server running.

**Solution:**
1. Install PM2:
   ```
   npm install -g pm2
   ```

2. Start your server with PM2:
   ```
   pm2 start start.js --name "jeffscotti-site"
   pm2 save
   pm2 startup
   ```

3. Check if the server is running:
   ```
   pm2 list
   ```

4. View logs for errors:
   ```
   pm2 logs jeffscotti-site
   ```

### 5. Port Configuration

Make sure the port you're using (4321) is not blocked by DreamHost's firewall.

**Solution:**
1. Contact DreamHost support to verify that local port 4321 can be used for proxying
2. Try changing the port in start.js and start.sh to a different port (e.g., 8080)

### 6. Check Server Logs

Server logs can provide valuable information about what's causing the 500 error.

**Solution:**
1. Check Apache error logs:
   ```
   tail -f /var/log/apache2/error.log
   ```
   (Note: You may need to ask DreamHost support for the correct path to Apache logs)

2. Check your Node.js server logs if you're using PM2:
   ```
   pm2 logs jeffscotti-site
   ```

## Complete Setup Process

Here's a complete setup process for your Astro SSR site on DreamHost:

### 1. SSH into your DreamHost server

```bash
ssh username@your-dreamhost-server.com
```

### 2. Install Node.js using NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18.19.0
node -v  # Verify Node.js is installed
```

### 3. Navigate to your website directory

```bash
cd /home/username/jeffscotti.net
```

### 4. Make the start script executable

```bash
chmod +x start.sh
```

### 5. Install PM2 for process management

```bash
npm install -g pm2
```

### 6. Start your server with PM2

```bash
pm2 start start.js --name "jeffscotti-site"
pm2 save
pm2 startup  # Follow the instructions provided by this command
```

### 7. Verify the server is running

```bash
pm2 list
node test.js
```

### 8. Configure PM2 to start on server reboot

Follow the instructions provided by the `pm2 startup` command to ensure your server starts automatically after a reboot.

## Alternative: Static Site Generation

If you continue to have issues with server-side rendering on DreamHost, you might consider switching to static site generation (SSG) instead of server-side rendering (SSR). This would eliminate the need for a running Node.js server.

To do this:

1. Modify your `astro.config.mjs` file:
   ```javascript
   // @ts-check
   import { defineConfig } from "astro/config";

   export default defineConfig({
     output: 'static'
   });
   ```

2. Remove any server-side API routes or implement them using a different approach (e.g., serverless functions)

3. Build the site and deploy only the static assets

This approach would be more compatible with traditional shared hosting like DreamHost, but you would lose the ability to use server-side rendering and API routes.
