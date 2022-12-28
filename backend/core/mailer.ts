import nodemailer from 'nodemailer'
import dotenv from "dotenv";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";
dotenv.config()

let transporter: Mail<SMTPTransport.SentMessageInfo>;
transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: false,
    auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD
    }
});


export const  sendActivationEmail = async (to: string, link: string) => {
    await transporter.sendMail({
        from:process.env.SMPT_USER,
        to,
        subject: `Активация аккаунта на ${process.env.API_URL}`,
        text: '',
        html:
            `
                    <div>
                        <h1>Для активации аккаунта перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
            `
    })
}