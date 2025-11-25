import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

type Body = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const validateBody = (body: Body) => {
  if (!body) return 'Missing request body.'
  if (!body.name || body.name.trim().length < 2) return 'Name is too short.'
  if (!body.email || !/\S+@\S+\.\S+/.test(body.email)) return 'Invalid email.'
  if (!body.message || body.message.trim().length < 5) return 'Message is too short.'
  return null
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as Body

    const validationError = validateBody(data)
    if (validationError) return NextResponse.json({ ok: false, error: validationError }, { status: 400 })

    // Read configuration from env - do NOT commit real credentials to git
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER

    if (!user || !pass || !to) {
      return NextResponse.json({ ok: false, error: 'Server not configured. Please set EMAIL_USER, EMAIL_PASS and EMAIL_TO in environment.' }, { status: 500 })
    }

    // Build transporter (works with Gmail + app password or other SMTP providers)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
      auth: { user, pass },
    })

    const subject = data.subject && data.subject.trim().length ? data.subject : 'New message from portfolio contact form'

    const html = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space:pre-wrap">${data.message}</div>
    `

    // Send mail with 'from' set to the authenticated user (so it lands in your Gmail). Set replyTo to sender's email.
    await transporter.sendMail({
      from: user,
      to,
      subject: `Portfolio Contact — ${subject}`,
      text: `${data.message}\n\nFrom: ${data.name} <${data.email}>`,
      html,
      replyTo: data.email || undefined,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('contact route error', err)
    return NextResponse.json({ ok: false, error: 'Server error while sending email' }, { status: 500 })
  }
}
