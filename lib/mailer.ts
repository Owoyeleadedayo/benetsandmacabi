// lib/mailer.ts
import nodemailer from 'nodemailer'

/**
 * Creates and returns a Nodemailer transporter configured for production reliability.
 * 
 * Key production issues fixed:
 * 1. Automatic stripping of whitespace from Google App Passwords (e.g. "abcd efgh ijkl mnop").
 * 2. Explicit host (smtp.gmail.com), port 465 (SSL/TLS direct), and timeouts to prevent connection hang/refusal in serverless hosts (Vercel, Netlify, AWS Lambda).
 * 3. Fallback checks and error logging for missing environment variables in production.
 */
export function getTransporter() {
  const user = process.env.SMTP_USER?.trim()
  // Strip any spaces from Google App Password if copied as formatted 4x4 blocks
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, '')

  if (!user || !pass) {
    console.error(
      '[Mailer Error] Missing SMTP credentials! Ensure SMTP_USER and SMTP_PASS environment variables are configured in your deployment platform (e.g. Vercel / Netlify dashboard).'
    )
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT) || 465
  const isSecure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user: user || '',
      pass: pass || '',
    },
    tls: {
      rejectUnauthorized: false, // Prevents certificate handshake failures in cloud containers
    },
    connectionTimeout: 15000, // 15s connection timeout for serverless execution
    greetingTimeout: 15000,
    socketTimeout: 15000,
  })
}

export const transporter = getTransporter()