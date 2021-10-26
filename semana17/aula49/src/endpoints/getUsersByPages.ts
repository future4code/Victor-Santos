import {Request, Response} from "express";
import {connection} from "../data/connection"

export const getUsersByPages = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await connection("aula49_exercicio")
        let page = Number(req.query.page);
        let size = 5;
        
        if(page < 1 || isNaN(page) ){
            page = 1
        }
        console.log(page)
        let offset = size * (page - 1);
        
        const getUsersByPage = await getAllUsers(offset)

        if(page > users.length / page) {
            const getUsersByPage = await getAllUsers(0)
            res.status(200).send(getUsersByPage)
        }

        res.status(200).send(getUsersByPage);
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }
}

export const getAllUsers = async (offset: number): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM aula49_exercicio
        LIMIT 5
        OFFSET ${offset};
    `)
    return result[0];
}