//EXERÍCIO 02
import {Request, Response} from "express"
import {connection} from "../data/connection"


export const getOrderUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let input: any = req.query.input as string
        input = input.toLowerCase()
        let sort = req.query.sort as string
        sort = sort.toUpperCase()

        if(sort === "") {
            sort = "ASC"
        } 

            if (input === "name") {
                const result = await selectOrderUsers(input, sort)
                res.status(200).send(result)
            } else if (input === "type") {
                const result = await selectOrderUsers(input, sort)
                res.status(200).send(result)
            } else if (input === "") {
                input = "email"
                const result = await selectOrderUsers(input, sort)
                res.status(200).send(result)
            } else {
                throw new Error("Favor informar um parametro válido!")
            }


        

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }
}

export default async function selectOrderUsers (input: string, sort: string) {
    const result = await connection.raw(`
        SELECT * FROM aula49_exercicio
        ORDER BY ${input} ${sort}
    `)

    return result[0];
}












