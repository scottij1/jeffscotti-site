// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Export both uppercase and lowercase method handlers for compatibility
export const post: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

export const POST: APIRoute = async ({ request }) => {
  return handleContactRequest(request);
};

// Shared handler function to avoid code duplication
async function handleContactRequest(request: Request) {
  console.log('Contact API endpoint called with method:', request.method);
  
  try {
    // Log the raw request body for debugging
    const clonedRequest = request.clone();
    const rawBody = await clonedRequest.text();
    console.log('Raw request body:', rawBody);
    
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

    // Log environment variables (without sensitive info)
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465',
      user: process.env.SMTP_USER ? '✓ Set' : '✗ Not set',
      pass: process.env.SMTP_PASS ? '✓ Set' : '✗ Not set',
      contactEmail: process.env.CONTACT_EMAIL
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"Contact Form" <${process.env.SMTP_USER}>`, // Use authenticated sender
        replyTo: email, // Set reply-to as the user's email
        to: process.env.CONTACT_EMAIL,
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
