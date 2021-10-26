import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await connection("aula49_exercicio")

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula49_exercicio;
   `)

   return result[0]
}
