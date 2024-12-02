import { Verification_Email_Template, Welcome_Email_Template } from "../config/EmailTemplate.js";
import { transporter } from "./sendEmail.js";

export const SendVerificationCode = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verify Your Email",
            text: "Verify Your Email",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode),
        });
        console.log('Verification email sent successfully:', response);
        return true;
    } catch (error) {
        console.error('Error sending verification email:', error);
        return false;
    }
};

export const WelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to Our Platform!",
            text: "Welcome to Our Platform!",
            html: Welcome_Email_Template.replace("{name}", name),
        });
        console.log('Welcome email sent successfully:', response);
        return true;
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return false;
    }
};
