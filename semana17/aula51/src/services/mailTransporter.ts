//Configurando o transporter para utilização do nodemailer
//Esta ferramenta serve para enviar emails automaticos
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export const transporter = nodemailer.createTransport({
    //host e auth são indispensáveis.
    host: "smtp.gmail.com", //Varia dependendo do email
    port: 587, //Varia dependendo do email
    secure: false, //Outra camada de segurança que desativo no gmail
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: { ciphers: "SSLv3" } //Outras camadas de segurança
});