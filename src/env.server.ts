// src/env.server.ts
import * as dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.dreamhost.com',
  SMTP_PORT: process.env.SMTP_PORT || '465',
  SMTP_USER: process.env.SMTP_USER || 'jeff@jeffscotti.net',
  SMTP_PASS: process.env.SMTP_PASS || '',
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'jeff@jeffscotti.net',
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || 'G-PV1N962H4B',
  GA_TAG_ID: process.env.GA_TAG_ID || 'GT-MBTZSXW',
};

export function validateEnv() {
  const missingVars = [];
  
  if (!ENV.SMTP_HOST) missingVars.push('SMTP_HOST');
  if (!ENV.SMTP_PORT) missingVars.push('SMTP_PORT');
  if (!ENV.SMTP_USER) missingVars.push('SMTP_USER');
  if (!ENV.SMTP_PASS) missingVars.push('SMTP_PASS');
  if (!ENV.CONTACT_EMAIL) missingVars.push('CONTACT_EMAIL');
  if (!ENV.GA_MEASUREMENT_ID) missingVars.push('GA_MEASUREMENT_ID');
  if (!ENV.GA_TAG_ID) missingVars.push('GA_TAG_ID');
  
  if (missingVars.length > 0) {
    return false;
  }
  
  return true;
}
