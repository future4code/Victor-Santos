import {Request, Response} from "express";
import { User } from "../classes/User";
import { connection } from "../connection";
import { UserDb } from "../types";
import { UserDatabase } from "../database/UserDatabase";

export default async function createUser(
    req: Request,
    res: Response
 ): Promise<void> {
 
    try {
       const {name, email, age} = req.body
       const id = `${Date.now()}`
 
       if (!id || !name || !email || !age) {
          res.statusCode = 401;
         throw new Error("Favor informar todos os campos corretamente")
       };
 
       const user = new User(id, name, email, age);
 
       const userDatabase = new UserDatabase()
       await userDatabase.createUser(user)
 
       res.status(201).end()
    } catch (error: any) {
       res.status(error.statusCode || 400).send(error.message || "Erro inesperado")
    }
 }
 