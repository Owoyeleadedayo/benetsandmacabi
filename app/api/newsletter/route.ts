// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { getTransporter } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '')

    if (!smtpUser || !smtpPass) {
      console.error('[Newsletter API] SMTP_USER or SMTP_PASS environment variable is missing.')
      return NextResponse.json(
        { error: 'Server email configuration error. Please check your production environment variables (SMTP_USER and SMTP_PASS).' },
        { status: 500 }
      )
    }

    const transporter = getTransporter()

    await transporter.sendMail({
      from: `"Makabis & Benet" <${smtpUser}>`,
      to: 'Makabisandbenet@gmail.com',
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

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Nodemailer newsletter error:', err)
    return NextResponse.json(
      { error: `Failed to send newsletter subscription email: ${message}` },
      { status: 500 }
    )
  }
}