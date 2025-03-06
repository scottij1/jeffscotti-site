// src/pages/api/contact-form.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { ENV, validateEnv } from '../../env.server';

// Export both uppercase and lowercase handlers for maximum compatibility
export const post: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

export const POST: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

async function handleContactRequest(request: Request) {
  try {
    const clonedRequest = request.clone();
    let rawBody = '';
    
    try {
      rawBody = await clonedRequest.text();
    } catch (textError) {
      return new Response(JSON.stringify({ 
        error: 'Could not read request body',
        details: textError instanceof Error ? textError.message : String(textError)
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    if (!rawBody || rawBody.trim() === '') {
      return new Response(JSON.stringify({ 
        error: 'Empty request body',
        details: 'The request body is empty or could not be read'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (jsonError) {
      return new Response(JSON.stringify({ 
        error: 'Invalid JSON format',
        details: jsonError instanceof Error ? jsonError.message : String(jsonError)
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    if (!data) {
      return new Response(JSON.stringify({ 
        error: 'Invalid data',
        details: 'The parsed data is null or undefined'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const isEnvValid = validateEnv();
    if (!isEnvValid) {
      return new Response(JSON.stringify({ 
        error: 'Server configuration error',
        details: 'Missing required environment variables'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    if (!ENV.SMTP_PASS) {
      return new Response(JSON.stringify({ 
        error: 'SMTP configuration error',
        details: 'SMTP password is not set'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const transporter = nodemailer.createTransport({
      host: ENV.SMTP_HOST, 
      port: Number(ENV.SMTP_PORT),
      secure: ENV.SMTP_PORT === '465', 
      auth: {
        user: ENV.SMTP_USER,
        pass: ENV.SMTP_PASS,
      }
    });
    
    try {
      await transporter.verify();
    } catch (verifyError) {
      return new Response(JSON.stringify({ 
        error: 'SMTP connection error',
        details: verifyError instanceof Error ? verifyError.message : String(verifyError)
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    try {
      const info = await transporter.sendMail({
        from: `"Contact Form" <${ENV.SMTP_USER}>`,
        replyTo: email,
        to: ENV.CONTACT_EMAIL,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
      });
      
      return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : String(error) 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (parseError) {
    return new Response(JSON.stringify({ 
      error: 'Invalid request format',
      details: parseError instanceof Error ? parseError.message : String(parseError)
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
