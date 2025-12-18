import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validation des champs
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Adresse email invalide' },
                { status: 400 }
            );
        }

        // Configuration SMTP O2switch
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465', // true si port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Parfois nécessaire avec certains hébergeurs
            },
        });

        await transporter.sendMail({
            from: `"Formulaire Contact AlexVWeb" <${process.env.SMTP_FROM}>`,
            to: process.env.SMTP_FROM, // ou une autre adresse
            replyTo: email,
            subject: `Contact: ${name}`,
            text: message,
            html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Nouveau message de contact</h2>
          <p><strong>De :</strong> ${name} (${email})</p>
          <hr>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        return NextResponse.json(
            { success: true, message: 'Email envoyé avec succès' },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error('Erreur SMTP:', error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
        return NextResponse.json(
            {
                error: "Erreur lors de l'envoi",
                details: errorMessage,
            },
            { status: 500 }
        );
    }
}

