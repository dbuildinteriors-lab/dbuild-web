import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: 'RESEND_API_KEY missing' },
                { status: 500 }
            );
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'DBuild Interiors <onBoarding2@resend.dev>',
                to: ['dbuildinteriors@gmail.com'],
                subject: `New DBuild Enquiry - ${body.service}`,
                html: `
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
            }),
        });

        const result = await resendResponse.json();

        if (!resendResponse.ok) {
            return NextResponse.json(
                { success: false, error: result },
                { status: resendResponse.status }
            );
        }

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.error('Contact API Error:', error);

        return NextResponse.json(
            { success: false, error: 'Unable to submit enquiry' },
            { status: 500 }
        );
    }
}