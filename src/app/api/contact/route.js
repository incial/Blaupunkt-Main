import { NextResponse } from 'next/server';
import { EnquireTemplate } from '../../../../src/Components/emails/EnquireTemplate';

export async function POST(request) {
    try {
        console.log('📝 Contact API called (Raw Fetch Version)');

        if (!process.env.RESEND_API_KEY) {
            console.error('❌ RESEND_API_KEY is missing');
            const envStatus = {
                KEY_EXISTS: !!process.env.RESEND_API_KEY,
                CONTACT_EMAIL: process.env.CONTACT_EMAIL
            };
            return NextResponse.json({
                success: false,
                error: `Configuration Error: Missing API Key. Debug: ${JSON.stringify(envStatus)}`
            }, { status: 500 });
        }

        const body = await request.json();
        const { name, email, phone, message } = body;

        console.log(`📩 Processing inquiry from: ${email}`);

        const emailHtml = EnquireTemplate({
            name,
            email,
            phone,
            message
        });

        const recipient = process.env.CONTACT_EMAIL || 'info@blaupunkt-ev.com';

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Blaupunkt Website <onboarding@resend.dev>',
                to: [recipient],
                subject: `New Contact Form Submission from ${name}`,
                html: emailHtml
            })
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error('❌ Resend API Error:', errorText);
            return NextResponse.json({ success: false, error: 'Resend API Error: ' + errorText }, { status: res.status });
        }

        const data = await res.json();
        console.log('✅ Email sent successfully:', data.id);

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('❌ Internal Server Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
