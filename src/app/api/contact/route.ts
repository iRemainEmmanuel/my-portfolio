import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  email?: string;
  whatsapp?: string;
  service?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot field
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function normalizeWhatsAppDigits(raw: string): string {
  return raw.replace(/[^\d]/g, '');
}

/**
 * Builds the notification email sent directly to Emmanuel's inbox.
 * Uses bulletproof table-in-table responsive HTML so it looks stunning
 * on desktop (Gmail Web, Outlook, Apple Mail) and mobile alike.
 */
function buildOwnerEmailHtml(params: {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  subject: string;
  message: string;
  submittedAt: string;
}): string {
  const safeName = escapeHtml(params.name);
  const safeEmail = escapeHtml(params.email);
  const safeWhatsapp = escapeHtml(params.whatsapp);
  const safeService = escapeHtml(params.service);
  const safeSubject = escapeHtml(params.subject);
  const safeMessage = escapeHtml(params.message).replace(/\n/g, '<br />');
  const waDigits = normalizeWhatsAppDigits(params.whatsapp);
  const preheaderText = `New enquiry from ${safeName} (${safeEmail}): ${escapeHtml(params.message.slice(0, 90))}...`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark" />
    <meta name="supported-color-schemes" content="dark" />
    <title>${safeSubject}</title>
    <style type="text/css">
      body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #090909; }
      @media screen and (max-width: 600px) {
        .email-container { width: 100% !important; margin: 0 auto !important; }
        .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
        .mobile-stack { display: block !important; width: 100% !important; box-sizing: border-box !important; }
        .mobile-stack-gap { margin-bottom: 10px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#090909;color:#F4F2ED;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <!-- Hidden preheader text for inbox preview snippet -->
    <div style="display:none;font-size:1px;color:#090909;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
      ${preheaderText}
    </div>

    <!-- Outer 100% container guaranteeing full dark background on desktop webmail -->
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#090909" style="width:100%;background-color:#090909;table-layout:fixed;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <!--[if (gte mso 9)|(IE)]>
          <table role="presentation" width="580" align="center" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
          <![endif]-->
          <table role="presentation" class="email-container" border="0" cellspacing="0" cellpadding="0" width="100%" style="max-width:580px;margin:0 auto;background-color:#141414;border:1px solid #262626;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.5);">
            <!-- Header -->
            <tr>
              <td class="mobile-padding" style="padding:32px 36px 24px 36px;border-bottom:1px solid #262626;background-color:#141414;">
                <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#A3B18A;">
                  New Website Enquiry
                </p>
                <h1 style="margin:0;font-size:22px;line-height:1.35;font-weight:700;color:#F4F2ED;letter-spacing:-0.01em;">
                  ${safeSubject}
                </h1>
              </td>
            </tr>

            <!-- Body Details -->
            <tr>
              <td class="mobile-padding" style="padding:28px 36px;background-color:#141414;">
                <!-- Contact info table -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:24px;border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A8A8A;width:120px;vertical-align:top;font-weight:600;">
                      From
                    </td>
                    <td style="padding:8px 0;font-size:15px;font-weight:600;color:#F4F2ED;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A8A8A;vertical-align:top;font-weight:600;">
                      Email
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#A3B18A;">
                      <a href="mailto:${safeEmail}" style="color:#A3B18A;text-decoration:none;font-weight:500;">${safeEmail}</a>
                    </td>
                  </tr>
                  ${
                    safeWhatsapp
                      ? `<tr>
                    <td style="padding:8px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A8A8A;vertical-align:top;font-weight:600;">
                      WhatsApp
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#F4F2ED;">
                      ${safeWhatsapp}
                    </td>
                  </tr>`
                      : ''
                  }
                  ${
                    safeService
                      ? `<tr>
                    <td style="padding:8px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A8A8A;vertical-align:top;font-weight:600;">
                      Service
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#F4F2ED;">
                      ${safeService}
                    </td>
                  </tr>`
                      : ''
                  }
                </table>

                <!-- Message Box -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
                  <tr>
                    <td style="padding:22px;background-color:#0D0D0D;border:1px solid #262626;border-radius:8px;">
                      <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A8A8A;">
                        Message Content
                      </p>
                      <div style="margin:0;font-size:15px;line-height:1.7;color:#F4F2ED;word-break:break-word;">
                        ${safeMessage}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Call to action buttons -->
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-top:6px;">
                  <tr>
                    <td style="padding-right:12px;" class="mobile-stack mobile-stack-gap">
                      <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" bgcolor="#A3B18A" style="border-radius:6px;">
                            <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${params.subject}`)}" style="display:inline-block;padding:12px 22px;background-color:#A3B18A;color:#090909;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:6px;border:1px solid #A3B18A;">
                              Reply by Email
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    ${
                      waDigits.length >= 7
                        ? `<td class="mobile-stack">
                      <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" bgcolor="#090909" style="border-radius:6px;border:1px solid #333333;">
                            <a href="https://wa.me/${waDigits}" target="_blank" style="display:inline-block;padding:12px 22px;background-color:#090909;color:#F4F2ED;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:6px;">
                              Open on WhatsApp &rarr;
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>`
                        : ''
                    }
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td class="mobile-padding" style="padding:18px 36px;border-top:1px solid #262626;background-color:#0D0D0D;font-size:12px;color:#737373;">
                Received via portfolio contact form on ${escapeHtml(params.submittedAt)}
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
              </td>
            </tr>
          </table>
          <![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/**
 * Builds the confirmation email sent to the visitor who submitted the form.
 * Refined desktop presentation, personal note closing, and founder signature.
 */
function buildVisitorReplyHtml(params: {
  name: string;
  email: string;
  whatsapp: string;
  subject: string;
}): string {
  const safeName = escapeHtml(params.name);
  const safeEmail = escapeHtml(params.email);
  const safeWhatsapp = escapeHtml(params.whatsapp);
  const safeSubject = escapeHtml(params.subject);
  const preheaderText = `Thank you for reaching out, ${safeName}. I have received your message regarding ${safeSubject}.`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark" />
    <meta name="supported-color-schemes" content="dark" />
    <title>Thank you for reaching out</title>
    <style type="text/css">
      body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #090909; }
      @media screen and (max-width: 600px) {
        .email-container { width: 100% !important; margin: 0 auto !important; }
        .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#090909;color:#F4F2ED;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <!-- Hidden preheader text for inbox preview snippet -->
    <div style="display:none;font-size:1px;color:#090909;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
      ${preheaderText}
    </div>

    <!-- Outer 100% container guaranteeing full dark background on desktop webmail -->
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#090909" style="width:100%;background-color:#090909;table-layout:fixed;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <!--[if (gte mso 9)|(IE)]>
          <table role="presentation" width="580" align="center" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
          <![endif]-->
          <table role="presentation" class="email-container" border="0" cellspacing="0" cellpadding="0" width="100%" style="max-width:580px;margin:0 auto;background-color:#141414;border:1px solid #262626;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.5);">
            <!-- Header -->
            <tr>
              <td class="mobile-padding" style="padding:32px 36px 24px 36px;border-bottom:1px solid #262626;background-color:#141414;">
                <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#A3B18A;">
                  Message Received
                </p>
                <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;color:#F4F2ED;letter-spacing:-0.01em;">
                  Thank you, ${safeName}.
                </h1>
              </td>
            </tr>

            <!-- Body Note -->
            <tr>
              <td class="mobile-padding" style="padding:28px 36px;background-color:#141414;">
                <p style="margin:0 0 16px 0;font-size:15px;line-height:1.75;color:#D4D2CC;">
                  I have received your message regarding <strong style="color:#F4F2ED;">${safeSubject}</strong>.
                </p>
                <p style="margin:0 0 24px 0;font-size:15px;line-height:1.75;color:#D4D2CC;">
                  I will review your enquiry and reply to <strong style="color:#F4F2ED;">${safeEmail}</strong>${
                    safeWhatsapp
                      ? ` or reach you on WhatsApp at <strong style="color:#F4F2ED;">${safeWhatsapp}</strong>`
                      : ''
                  } shortly.
                </p>

                <!-- WhatsApp Option -->
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin:24px 0;">
                  <tr>
                    <td align="center" bgcolor="#A3B18A" style="border-radius:6px;">
                      <a href="https://wa.me/260966271989" target="_blank" style="display:inline-block;padding:12px 24px;background-color:#A3B18A;color:#090909;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:6px;border:1px solid #A3B18A;">
                        Chat on WhatsApp &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Personal Sign-Off as requested -->
                <p style="margin:28px 0 0 0;font-size:15px;line-height:1.75;color:#D4D2CC;">
                  Kind regards,<br />
                  <strong style="color:#F4F2ED;font-size:15px;">Emmanuel Mwamba</strong>
                </p>
              </td>
            </tr>

            <!-- Footer with Option A: Founder-focused identity -->
            <tr>
              <td class="mobile-padding" style="padding:20px 36px;border-top:1px solid #262626;background-color:#0D0D0D;font-size:12px;line-height:1.6;color:#8A8A8A;">
                <strong style="color:#F4F2ED;font-size:13px;">Emmanuel Mwamba</strong><br />
                Founder, EICTA Technologies · Software Developer
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
              </td>
            </tr>
          </table>
          <![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Silent honeypot check for automated bots
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = sanitizeHeader(body.name ?? '');
    const email = sanitizeHeader(body.email ?? '');
    const whatsapp = sanitizeHeader(body.whatsapp ?? '');
    const service = sanitizeHeader(body.service ?? '');
    const subject = sanitizeHeader(body.subject ?? '') || (service ? `${service} Enquiry` : 'Website Enquiry');
    const message = (body.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.');
      return NextResponse.json(
        { error: 'Email service is not configured yet.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ''),
      },
    });

    const submittedAt = new Intl.DateTimeFormat('en-ZM', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'Africa/Lusaka',
    }).format(new Date());

    const cleanSenderName = name.replace(/["\r\n]/g, '').trim();

    const ownerTextLines = [
      `New Website Enquiry: ${subject}`,
      '',
      `From: ${name}`,
      `Email: ${email}`,
      ...(whatsapp ? [`WhatsApp: ${whatsapp}`] : []),
      ...(service ? [`Service: ${service}`] : []),
      '',
      'Message:',
      message,
      '',
      `Submitted on ${submittedAt}`,
    ];

    // 1. Send enquiry directly to Emmanuel's inbox.
    // To resolve Gmail grouping self-sent emails as "me", we:
    // a) Put the sender's name prominently at the start of the Subject: [Enquiry: Name] Subject
    // b) Set the display name in the From header: "${name} via Portfolio" <gmailUser>
    // c) Set Reply-To directly to the visitor's email address
    await transporter.sendMail({
      from: `"${cleanSenderName} via Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: `"${cleanSenderName}" <${email}>`,
      subject: `[Enquiry: ${name}] ${subject}`,
      text: ownerTextLines.join('\n'),
      html: buildOwnerEmailHtml({
        name,
        email,
        whatsapp,
        service,
        subject,
        message,
        submittedAt,
      }),
    });

    // 2. Send custom thank-you confirmation email to the visitor (non-fatal if visitor inbox rejects)
    try {
      const visitorText = [
        `Hi ${name},`,
        '',
        `Thank you for reaching out regarding "${subject}".`,
        `I have received your message and will review your enquiry shortly. I will reply to ${email}${
          whatsapp ? ` or reach you on WhatsApp at ${whatsapp}` : ''
        }.`,
        '',
        'If you need a quicker response, you can also reach me directly on WhatsApp: https://wa.me/260966271989',
        '',
        'Kind regards,',
        'Emmanuel Mwamba',
        'Founder, EICTA Technologies · Software Developer',
      ].join('\n');

      await transporter.sendMail({
        from: `"Emmanuel Mwamba" <${gmailUser}>`,
        to: email,
        replyTo: gmailUser,
        subject: `Thank you for reaching out, ${name}`,
        text: visitorText,
        html: buildVisitorReplyHtml({ name, email, whatsapp, subject }),
      });
    } catch (replyError) {
      console.warn('Visitor auto-reply failed:', replyError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again or reach out via WhatsApp.' },
      { status: 500 },
    );
  }
}
