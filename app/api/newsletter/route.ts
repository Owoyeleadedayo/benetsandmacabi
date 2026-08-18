// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: (process.env.SMTP_PASS || '').replace(/\s/g, ''), // strip spaces from App Password
    },
  })

  const mailOptions = {
    from: `"Makabis & Benet Newsletter" <${process.env.SMTP_USER}>`,
    to: 'newsletter@makabisandbenet.com',
    replyTo: email,
    subject: 'New Newsletter Subscriber',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #0071B3; margin-bottom: 4px;">New Newsletter Subscriber</h2>
        <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Someone subscribed via the website newsletter form.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 15px; color: #111827;"><strong>Email:</strong> ${email}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #9ca3af; font-size: 12px;">This email was sent automatically from the Makabis &amp; Benet website.</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter nodemailer error:', err)
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
  }
}