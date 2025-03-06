// src/pages/api/contact-form.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { ENV, validateEnv } from '../../env.server';

export const post: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

export const POST: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

// Shared handler function to avoid code duplication
async function handleContactRequest(request: Request) {
  console.log('Contact form API endpoint called with method:', request.method);
  
  try {
    // Log the raw request body for debugging
    const clonedRequest = request.clone();
    let rawBody = '';
    
    try {
      rawBody = await clonedRequest.text();
      console.log('Raw request body:', rawBody);
    } catch (textError) {
      console.error('Error reading request body as text:', textError);
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
    
    // Check if the body is empty
    if (!rawBody || rawBody.trim() === '') {
      console.error('Empty request body');
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
    
    // Try to parse the JSON body
    let data;
    try {
      // Parse the JSON body from the form submission
      data = JSON.parse(rawBody);
    } catch (jsonError) {
      console.error('JSON parse error:', jsonError);
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
    
    // Check if data is null or undefined
    if (!data) {
      console.error('Parsed data is null or undefined');
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

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validate environment variables
    const isEnvValid = validateEnv();
    if (!isEnvValid) {
      console.error('Environment validation failed');
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
    
    // Log environment variables (without sensitive info)
    console.log('SMTP Configuration:', {
      host: ENV.SMTP_HOST,
      port: ENV.SMTP_PORT,
      secure: ENV.SMTP_PORT === '465',
      user: ENV.SMTP_USER ? '✓ Set' : '✗ Not set',
      pass: ENV.SMTP_PASS ? '✓ Set' : '✗ Not set',
      contactEmail: ENV.CONTACT_EMAIL
    });
    
    // Check if SMTP password is set
    if (!ENV.SMTP_PASS) {
      console.error('SMTP password is not set');
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

    console.log('Creating nodemailer transporter with config:', {
      host: ENV.SMTP_HOST,
      port: Number(ENV.SMTP_PORT),
      secure: ENV.SMTP_PORT === '465',
      auth: {
        user: ENV.SMTP_USER,
        pass: '********' // Mask password in logs
      }
    });

    const transporter = nodemailer.createTransport({
      host: ENV.SMTP_HOST, 
      port: Number(ENV.SMTP_PORT),
      secure: ENV.SMTP_PORT === '465', 
      auth: {
        user: ENV.SMTP_USER,
        pass: ENV.SMTP_PASS,
      },
      debug: true, // Enable debug output
      logger: true // Log information about the mail
    });
    
    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
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
        from: `"Contact Form" <${ENV.SMTP_USER}>`, // Use authenticated sender
        replyTo: email, // Set reply-to as the user's email
        to: ENV.CONTACT_EMAIL,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
      });

      console.log('Message sent successfully:', info.messageId);
      
      return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error sending email:', error);
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
    console.error('Error parsing request:', parseError);
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
