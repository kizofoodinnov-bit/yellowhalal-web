import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import { NextRequest, NextResponse } from 'next/server';

const ses = new SESv2Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    await ses.send(new SendEmailCommand({
      FromEmailAddress: process.env.SES_FROM_EMAIL!,
      Destination: { ToAddresses: [process.env.SES_REPLY_TO!] },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: { Data: `[YellowHalal] ${subject || 'Nouveau message'}` },
          Body: {
            Html: { Data: `<p><b>De :</b> ${name} (${email})</p><p>${message}</p>` },
            Text: { Data: `De: ${name} (${email})\n\n${message}` },
          },
        },
      },
    }));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('SES error', err);
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
