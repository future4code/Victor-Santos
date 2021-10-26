import {Request, Response} from "express";
import {connection} from "../data/connection"
import {student, teacher, cohort} from "../type"

export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const students = await connection("student");
        res.status(200).send(students)
    } catch (error) {
        console.error(error);
        res.status(400).send("Falha na requisição!")
    }
}










