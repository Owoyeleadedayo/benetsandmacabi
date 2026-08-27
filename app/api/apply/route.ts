// app/api/apply/route.ts
import { NextResponse } from 'next/server'
import { getResendClient } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, role, message } = await req.json()

    if (!fullName || !email || !role) {
      return NextResponse.json({ error: 'Full name, email, and role are required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY?.trim()

    if (!apiKey) {
      console.error('[Apply API] RESEND_API_KEY environment variable is missing.')
      return NextResponse.json(
        { error: 'Server email configuration error. Please ensure RESEND_API_KEY is configured in your environment variables.' },
        { status: 500 }
      )
    }

    const resend = getResendClient()
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Makabis & Benet Careers <onboarding@resend.dev>'
    const toEmail = process.env.TO_EMAIL || 'Makabisandbenet@gmail.com'

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Job Application: ${role}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #0071B3; margin-bottom: 4px;">New Job Application</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Received via makabisandbenet.com careers page</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;">Full Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; color: #0071B3;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td>
              <td style="padding: 8px 0; color: #111827;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Role Applied For</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${role}</td>
            </tr>
          </table>

          ${message ? `
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 6px;">Message / Cover Note</p>
          <p style="color: #111827; background: #f9fafb; padding: 14px; border-radius: 6px; font-size: 15px; line-height: 1.6;">${message}</p>
          ` : ''}

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">This email was sent automatically from the Makabis &amp; Benet website careers form.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend apply error:', error)
      return NextResponse.json(
        { error: `Failed to send application email: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Resend apply catch error:', err)
    return NextResponse.json(
      { error: `Failed to send application email: ${message}` },
      { status: 500 }
    )
  }
}