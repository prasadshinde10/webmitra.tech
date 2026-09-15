import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the data (in a real app, send via Resend or Nodemailer to webmitra.tech here)
    console.log('Received contact form submission:', data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
