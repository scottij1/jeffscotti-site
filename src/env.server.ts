// src/env.server.ts
import * as dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.dreamhost.com',
  SMTP_PORT: process.env.SMTP_PORT || '465',
  SMTP_USER: process.env.SMTP_USER || 'jeff@jeffscotti.net',
  SMTP_PASS: process.env.SMTP_PASS || '',
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'jeff@jeffscotti.net',
};

export function validateEnv() {
  const missingVars = [];
  
  if (!ENV.SMTP_HOST) missingVars.push('SMTP_HOST');
  if (!ENV.SMTP_PORT) missingVars.push('SMTP_PORT');
  if (!ENV.SMTP_USER) missingVars.push('SMTP_USER');
  if (!ENV.SMTP_PASS) missingVars.push('SMTP_PASS');
  if (!ENV.CONTACT_EMAIL) missingVars.push('CONTACT_EMAIL');
  
  if (missingVars.length > 0) {
    return false;
  }
  
  return true;
}
