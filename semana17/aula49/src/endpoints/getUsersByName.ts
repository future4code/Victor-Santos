//EXERCÍCIO 01
//a.
import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await connection("aula49_exercicio")
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       };

       const name = req.query.name as string;

       const getUsers = await selectAllUsers(name);

       if(!name || name === ""){
          res.send(users)
       }; 

          res.status(200).send(getUsers);
        
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 

 export default async function selectAllUsers(name: string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE name LIKE "%${name}%";
    `)
 
    return result[0]
 }
 
 