// app/contact.ts (VERIFIED FINAL CODE)

"use server"; 

import nodemailer from 'nodemailer'; // Requires installation of @types/nodemailer

interface FormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactMessage(formData: FormData) {
    
    // --- Configuration (MUST BE SET IN .env.local) ---
    const emailUser = process.env.EMAIL_USER; 
    const emailPass = process.env.EMAIL_PASS; 

    if (!emailUser || !emailPass) {
        console.error("Configuration Error: EMAIL_USER or EMAIL_PASS not set in environment variables.");
        return { success: false, message: "Configuration error. Please check server logs." };
    }

    // 1. Configure the Mail Transporter 
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: emailUser,
            pass: emailPass,
        },
    });

    // 2. Define the Email Content
    const mailOptions = {
        from: emailUser,                  
        to: emailUser,                    
        subject: `New Contact Message from ${formData.name}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        html: `
            <h3>New Contact Message</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <hr/>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
    };

    // 3. Send the Email
    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Message sent successfully! Thank you." };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send message. Please try again or email me directly." };
    }
}
