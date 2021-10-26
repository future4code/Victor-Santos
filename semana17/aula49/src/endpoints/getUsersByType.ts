//EXERCÍCIO 01
//b.
import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await connection("aula49_exercicio")
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       const type = req.params.type as string;

       const getUsers = await selectAllUsers(type);

       if(!type || type === ""){
          res.statusCode = 404;
          throw new Error("Favor informar corretamente o type");
       }
       res.status(200).send(getUsers);
       
    } catch (error: any) {
       console.log(error);
       res.send(error.message || error.sqlMessage);
    }
 };
 

 export default async function selectAllUsers(type: string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE type LIKE "%${type}%";
    `);
 
    return result[0];
 };
 