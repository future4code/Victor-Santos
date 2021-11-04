import {Request, Response} from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const getUser = async (req: Request, res: Response): Promise <void> => {
    try {
        const {email} = req.query
        const token = req.headers.authorization as string;

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData) {
            res.statusCode = 401
            throw new Error("Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho");
        };
        console.log(tokenData.id)

        const [user] = await connection("user_aula55")
        .where({id: tokenData.id})

        console.log(user)
               
        res.status(200).send({id: user.id, email: user.email})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}