import express, {Request, Response} from 'express'
import cors from "cors"
import {user, users} from "./data"
import { AddressInfo } from 'net'
import { runInNewContext } from 'vm'

const app = express()

app.use(express.json())
app.use(cors())
//Exercício 01
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
//- Lista de usuários
//{users} ./data

//a. Qual método HTTP você deve utilizar para isso?*
//Resposta: Para buscar uma lista com todos os usuários de uma lista devemos utilizar o método get.

//b. Como você indicaria a **entidade** que está sendo manipulada?
//Resposta: indicaria através do path "/users", já que queremos buscar um usuário.

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const adress = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${adress.port}`)
    } else {
        console.error("Failure upon starting server.");
    }
})

//getAllUsers
// app.get("/users", (req: Request, res: Response) => {
//     let codeError: number = 400
//     try {
//         res.status(200).send({users})
//     } catch (error: any) {
//         res.status(codeError).send({message: error.message})
//     }
// })


//Exercício 02
//Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, recebendo apenas um `type` por vez. Após isso, responda:
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//Resposta: Passei as requisições de type por path params, pois como se trata de apenas um elemento de pequisa, achei melhor realizá-lo através do path params.

//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//Resposta: Sim, através de uma verificação de req.params.type === "ADMIN" ou "NORMAL"
//getUsersByType
app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        if (req.params.type.toUpperCase() !== "ADMIN" && req.params.type.toUpperCase() !== "NORMAL") {
            codeError = 401
            throw new Error("Please check fields")
        }
        const userType: string | undefined = req.params.type as string
        const usersList: user[] | undefined = users.filter((user) => user.type === userType.toUpperCase())
        
        if (usersList) {
            res.status(200).send({usersList})
        }

    } catch (error: any) {
        res.status(codeError).send({message: error.message})
    }
})

//Exercício 03
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//Reposta: Costuma-se usar o query parameters.
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        if (!req.query.name) {
            codeError = 401
            throw new Error("Error: Por favor, indique um campo de busca.")
        }
        const name: string | undefined = req.query.name as string
        const user: user | undefined = users.find((user) => user.name.toLowerCase() === name.toLowerCase())
        
        if (!user) {
            codeError = 404
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send({user})

    } catch (error: any) {
        res.status(codeError).send({message: error.message})
    }
})

//Exercício 04
//Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
app.put("/users", (req: Request, res: Response) => {
    let codeError = 400
    try {
        const {id, name, email, type, age} = req.body

        const newUser: user | undefined = {
            id,
            name,
            email,
            type,
            age
        }

        if (!id || !email || !name || !type || !age) {
            codeError = 401
            throw new Error("Erro: informe corretamente os campos solicitados.")
        }

        users.push(newUser)

        res.status(200).send("Usuário criado com sucesso.")

    } catch (error: any) {
        res.status(codeError).send({message: error.message})
    }
})
//a. Mude o método do endpoint para `PUT`. O que mudou?
//Resposta: Apresenta um erro 404 - not found, já que o put serve para alterar um elemento ja criado ou, criar um elemento, caso ele não exista.
//b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//Reposta: Não considero o método put apropriado para criação de um novo elemento, pois ja existe o método post para isso. O put é utilizado para atualizar um elemento.
