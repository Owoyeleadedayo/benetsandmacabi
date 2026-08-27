// lib/resend.ts
import { Resend } from 'resend'

/**
 * Initializes and returns a Resend instance.
 * Ensures RESEND_API_KEY is defined in environment variables.
 */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim()

  if (!apiKey) {
    console.error(
      '[Resend Error] RESEND_API_KEY environment variable is not set. Please add RESEND_API_KEY to your environment variables (e.g. .env.local or Vercel dashboard).'
    )
  }

  return new Resend(apiKey || '')
}

export const resend = getResendClient()
