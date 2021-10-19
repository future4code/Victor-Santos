import knex from "knex"
import dotenv from "dotenv"

dotenv.config() //Caso os arquivos DB estiverem antes desse comando, eles retornam undefined, não sendo possivel acessá-los.

export const connection = knex({ //passamos dois objetos 1- client e 2- connection (onde passamos nossos dados)
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: Number(process.env.DB_PORT),
        multipleStatements: true
    }
})

export default connection;
