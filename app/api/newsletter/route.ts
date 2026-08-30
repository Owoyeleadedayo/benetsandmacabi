// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { getResendClient } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY?.trim()

    if (!apiKey) {
      console.error('[Newsletter API] RESEND_API_KEY environment variable is missing.')
      return NextResponse.json(
        { error: 'Server email configuration error. Please ensure RESEND_API_KEY is configured in your environment variables.' },
        { status: 500 }
      )
    }

    const resend = getResendClient()
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Makabis & Benet <onboarding@resend.dev>'
    const toEmail = process.env.TO_EMAIL || 'owoyeleadedayo25@gmail.com'

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: 'New Newsletter Subscriber',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #0071B3; margin-bottom: 4px;">New Newsletter Subscriber</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Someone subscribed via the website newsletter form.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 15px; color: #111827;"><strong>Subscriber Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">This email was sent automatically from the Makabis &amp; Benet website.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend newsletter error:', error)
      return NextResponse.json(
        { error: `Failed to send subscriber email: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Resend newsletter catch error:', err)
    return NextResponse.json(
      { error: `Failed to send newsletter subscription email: ${message}` },
      { status: 500 }
    )
  }
}