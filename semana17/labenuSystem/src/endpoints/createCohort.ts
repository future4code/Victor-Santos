import {Request, Response} from "express";
import {connection} from "../data/connection";

export const createCohort = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id, name, startDate, endDate, currentModule} = req.body

        if (!id || !name || !startDate || !endDate || !currentModule) {
            res.statusCode = 400;
            throw new Error("Favor preencher todos os campos corretamente!")
        }

        await connection("cohort")
        .insert({
            id,
            name,
            startDate,
            endDate,
            currentModule
        })

        res.status(201).send("Cohort created successfully!")

    } catch(error: any) {
        res.send(error.message || error.sqlMessage);
    }
}



