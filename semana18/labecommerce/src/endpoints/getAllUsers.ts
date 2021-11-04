import {Request, Response} from "express";
import { User } from "../classes/User";
import { connection } from "../connection";
import { UserDb } from "../types";
import { UserDatabase } from "../database/UserDatabase";


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        // const result: UserDb = await connection("users")
        
        // res.status(200).send(result);

        const userDatabase = new UserDatabase();
        const userDb: UserDb[] = await userDatabase.getAll();

        const users = userDb.map(user => {
            return new User(
                user.id,
                user.name,
                user.email,
                user.age
            )
        })

        res.send(users);

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}
