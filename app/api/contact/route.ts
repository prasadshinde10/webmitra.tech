import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    // In production, integrate email service (e.g., Resend or Nodemailer)
    console.log('Received contact submission:', {
      name,
      email,
      service: service || 'unspecified',
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Inquiry received.' });
  } catch (err) {
    console.error('API Contact submission error:', err);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
