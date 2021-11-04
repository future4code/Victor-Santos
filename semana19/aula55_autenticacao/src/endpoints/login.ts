import {Request, Response} from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;

        const [user] = await connection("user_aula55")
        .where({email});

        if(!email.includes("@") || !email) {
            throw new Error("Favor preencher o email corretamente");
        };
        
        if (!user || user.password !== password) {
            res.statusCode = 401
            throw new Error("Unauthorized")
        };

        const token = new Authenticator().generatorToken({id: user.id});

        res.send({token});

    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send("Internal server error!");
        } else {
            res.send(error.message);
        };
        
    };
};