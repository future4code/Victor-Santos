import {Request, Response} from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { GeneratorId } from "../services/GeneratorId";
import { User } from "../type";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = new GeneratorId().genereteId();

        if (!email || !password || password.length < 6 || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("Preencha todos os campos corretamente")
        }

        const [user] = await connection("user_aula55")
        .where({email})

        if (user) {
            res.statusCode = 409;
            throw new Error("Usuário já cadastrado")
        }

        const newUser: User = ({id, email, password});

        await connection("user_aula55")
        .insert(newUser);

        const token = new Authenticator().generatorToken({id})

        res.status(201).send({token, newUser});

    } catch(error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}