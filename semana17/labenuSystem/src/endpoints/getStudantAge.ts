import {Request, Response} from "express";
import {connection} from "../data/connection"

export const getStudantAge = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const birth_date = req.body.birth_date

        const student = await connection.raw(`
            SELECT DATEDIFF(CURDATE(), birth_date) FROM student
            WHERE id LIKE ${id};
        `)

        const result = student[0][0] / 365

        res.send(result)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage);
    }
}




