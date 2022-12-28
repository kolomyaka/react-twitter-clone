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
        subject: `Подтвердите свою учетную запись в React Twitter clone`,
        text: '',
        html:
            `
                    <div>
                        <h1>Для активации аккаунта перейдите 
                            <a href="${link}">по ссылке</a>
                        </h1>
                    </div>
            `
    })
}