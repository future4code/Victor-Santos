import {Request, Response} from "express";
import {connection} from "../data/connection"

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let type = req.params.type as string;
        let name = req.query.name as string;
        let order = req.query.order as string;
        let sort = req.query.sort as string;
        let size = 5;
        let page = Number(req.query.page);
        let offset = size * (page - 1);

        if (!name && !type) {
            res.send(await connection("aula49_exercicio"))
        } else {
            if(!order && !sort) {
                order = "name"
                sort = "DESC"
            }
            if (!page || isNaN(page)) {
                page = 1
            }

            const users = await connection.raw(`
            SELECT * FROM aula49_exercicio
            WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"
            ORDER BY ${order} ${sort}
            LIMIT ${size}
            OFFSET ${offset};
        `)
        res.send(users[0])

        }


        
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }

}

export enum type {
    Teacher,
    Operations,
    CX
}