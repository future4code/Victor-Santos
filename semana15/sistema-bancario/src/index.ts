console.log("Hello World!")
import express, {Request, Response} from 'express'
import cors from "cors"
import {AddressInfo} from 'net'
import {userCount, transacoes, users} from './data'

const app = express()

app.use(express.json())
app.use(cors())

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost ${address.port}`)
    }
})

app.post("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const {age, name, cpf, dataNascimento, saldo, extrato} = req.body
        const {valor, data, descricao} = extrato
        
        if (age < 18) {
            codeError = 401
            throw new Error("Você não possui idade suficiente para abertura de conta.")
        }
        
        const newUser: userCount | undefined = {
            age,
            name,
            cpf,
            dataNascimento,
            saldo,
            extrato,
        }
        
        if (!age || !name || !cpf || !dataNascimento || !saldo || !extrato) {
            codeError = 404
            throw new Error("Error: Favor informar todos os dados")
        }
        

        users.push(newUser)
        res.status(200).send("Usuário criado com sucesso!")

    } catch (error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        res.status(200).send({users})
    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

