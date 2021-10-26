import {application, Request, Response} from "express";
import {connection} from "../data/connection";
import {student} from "../type";


export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id, name, email, birth_date, cohort_id} = req.body

        if (!id || !name || !email || !birth_date) {
            res.statusCode = 400
            throw new Error("Favor informar todos os campos corretamente!")
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw new Error("Formato de email inválido!")
        }

        const createUser = await connection("student")
        .insert({
            id,
            name,
            email,
            birth_date
        })

        res.status(201).send("User created successfully!")

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}


