import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import connection from './connection';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => { res.send("Hello from express!") })

//DECLARANDO UM SERVER
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.")
    }
});

//Endpoint de criar usuários:
//1.
app.put("/user", async (req, res) => {
    try {
        if(!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Favor preencher todos os campos corretamente.")
        }
        await connection.raw(`
            INSERT INTO users_toDoList (name, nickname, email)
            VALUES ("${req.body.name}", "${req.body.nickname}", "${req.body.email}");
        `)
        res.status(201).send("User created succesfully!")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})

//Endpoint de pegar usuários pelo id
//2.
app.get("/user/:id", async (req, res) => {
    try {
        const user = await connection("users_toDoList")
        .where({id: req.params.id})
    if(user.length === 0) {
        throw new Error("Please, enter a valid id")
    } else {
        res.status(200).send(user)
    }
    console.log(user.length)
    } catch (error: any) {
        res.status(400).send(error.sqlError || error.message);
    }
})


//Endpoint para editar um usuário
//POST(update)
//3.
// const updateUsersById = async (name: string, nickname: string, email: string, id: number): Promise<any> => {
//     const result = await connection("users_toDoList")
//     .update ({name: name, nickname: nickname, email: email})
//     .where({id: Number(id)})
// }
app.post("/user/edit/:id", async (req, res) => {
    try {
        await connection("users_toDoList")
        .update({name: req.body.name, nickname: req.body.nickname, email: req.body.email})
        .where({id: req.params.id})
        if(!req.body.name || !req.body.nickname || !req.body.name) {
            throw new Error("Favor alterar todos os dados!")
        }
        res.status(200).send("Success!")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})


//Endpoint para criar tarefa
//POST (insert into)
//4.
app.put("/task", async (req, res) => {
    try {
        await connection("tasks_toDoList")
        .insert({title: req.body.title, description: req.body.description, limit_date: req.body.limit_date, status: req.body.status, creator_user_id: Number(req.body.creator_user_id)})
        if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.status || !req.body.creator_user_id) {
            throw new Error("Favor informar todos os dados corretamente.")
        }
        res.status(200).send("Success!")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Endpoint Pegar tarefas pelo id
//GET
//5.
app.get("/task/:id", async (req, res) => {
    try {
        res.status(200).send(await connection("tasks_toDoList").where({id: req.params.id}))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})


//Endpoint para pegar todos os usuários
//GET
//6.
app.get("/users/all", async (req, res) => {
    try {
        const result = await connection("users_toDoList")
        res.status(200).send(result);
    } catch (error: any) {
        res.status(404).send(error.sqlMessage || error.message);
    }
})


//Endpoint pegar as tarefas criadas por um usuário
//GET
//7.
app.get("/tasks", async (req, res) => {
    try {
        const result = await connection("tasks_toDoList")
        .where({creator_user_id: req.query.id})
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})



