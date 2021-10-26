import {Request, Response} from "express";
import {connection} from "../data/connection";

export const addStudentCohort = async (req: Request, res: Response): Promise<void> => {
    try {
        const cohort_id = req.body.cohort_id
        const id = req.params.id

        if(!cohort_id) {
            res.statusCode = 422;
            throw new Error("Favor informar o id da turma!")
        }

        await connection("student")
        .update({cohort_id})
        .where({id})

        res.status(200).send("Success!")
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}


