import nodemailer from 'nodemailer'
import dotenv from "dotenv";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";
dotenv.config()

let transporter: Mail<SMTPTransport.SentMessageInfo>;


transporter = nodemailer.createTransport({
    // @ts-ignore
    service: 'gmail',
    host: process.env.SMPT_HOST, // 587
    port: process.env.SMPT_PORT, // gjqhrtdwysqpejgr
    auth: {
        type: 'login',
        user: process.env.SMPT_USER, // react.twitter.clonee@gmail.com
        pass: process.env.SMPT_PASSWORD // Qwerty5!
    }
});


export const  sendActivationEmail = async (to: string, link: string) => {
    await transporter.sendMail({
        from:'react.twitter.clonee@gmail.com',
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