import {config} from "dotenv";
import app from "./app";
import createUser from "./endpoints/createUser";
// import { transporter } from "./services/mailTransporter";
import { getAddressInfo } from "./services/getAddressInfo";

config();

app.post("/users/signup", createUser);

getAddressInfo(80530230)
   .then(console.log)
   .catch(console.log)

//É possível puxar todos os emails de uma base de dados para enviar o e-mail a todos.
// transporter.sendMail({
//    from: process.env.NODEMAILER_USER,
//    to: ["astrodev.labenu@gmail.com", "email2@gmail.com"],
//    subject: "Assunto do email:",
//    text: `Conteúdo do email versão minificada
//    Clique no botão abaixo para finalizar seu cadastro:
//    http://link.com.br`,
//    html: `<p>Conteúdo do email</p>
//    <p>Clique no botão abaixo para finalizar seu cadastro:</p>
//    <button>Verificar meu email</button>
//    `
// })
//    .then(console.log)
//    .catch(console.log)