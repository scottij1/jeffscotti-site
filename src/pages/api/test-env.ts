// src/pages/api/test-env.ts
import type { APIRoute } from 'astro';
import { ENV, validateEnv } from '../../env.server';

// Function to get environment variables
function getEnvInfo() {
  // Get environment variables (mask sensitive info)
  const isEnvValid = validateEnv();
  
  return {
    message: 'Environment variables test',
    env: {
      SMTP_HOST: ENV.SMTP_HOST,
      SMTP_PORT: ENV.SMTP_PORT,
      SMTP_USER: ENV.SMTP_USER,
      SMTP_PASS: ENV.SMTP_PASS ? '✓ Set (masked)' : '✗ Not set',
      CONTACT_EMAIL: ENV.CONTACT_EMAIL,
      NODE_ENV: process.env.NODE_ENV || 'Not set',
      ENV_VALID: isEnvValid
    }
  };
}

// Handle GET requests
export const get: APIRoute = async () => {
  const envInfo = getEnvInfo();
  
  // Return environment variables as JSON
  return new Response(JSON.stringify(envInfo), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Handle GET requests (uppercase for compatibility)
export const GET: APIRoute = async () => {
  const envInfo = getEnvInfo();
  
  // Return environment variables as JSON
  return new Response(JSON.stringify(envInfo), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
