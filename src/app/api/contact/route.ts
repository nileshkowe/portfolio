import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
  subject?: string
  budget?: string
  timeline?: string
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    const { name, email, message, subject, budget, timeline } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const optionalFields = [
      subject && `Project Type: ${subject}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
    ].filter(Boolean)

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${optionalFields.map(field => `<p><strong>${field?.split(': ')[0]}:</strong> ${field?.split(': ').slice(1).join(': ')}</p>`).join('')}
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'nileshkowe28@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
