**AULA 49 - EXERCÍCIOS**
*a. a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.*
```
app.get("/users", getUsersByName);

export default async function selectAllUsers(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula49_exercicio
      WHERE name LIKE "%${name}%";
   `)

   return result[0]
}

const name = req.query.name as string

      const getUserByName = await selectAllUsers(name)
      if(!name || name === ""){
         res.send(users)
      } else if (name){
         res.status(200).send(getUserByName)
      }


```

*b. Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user. O tipo de user deve ser passado por path params.*
```
app.get("/user/:type", getUsersByType);

export default async function selectAllUsers(type: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula49_exercicio
      WHERE type LIKE "%${type}%";
   `)

   return result[0]
}

const type = req.params.type as string
      const getUsersByType = await selectAllUsers(type)
      if(!type || type === ""){
         res.statusCode = 404
         throw new Error("Favor informar corretamente o type")
      }
      res.status(200).send(getUsersByType)

```

**EXERCÍCIO 02**
*Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.*
```
app.get("/exercicio02/user", getOrderUsers);

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
```


**Exercício 03**
*Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.*
```
app.get("/exercicio03/user", getUsersByPages);
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
```


**EXERCÍCIO 04**
*Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:*

*- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;*
*- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;***
*- Caso o usuário não forneça número de página, deve começar na página 1*
```
app.get("/exercicio04/user", getUsers);
app.get("/exercicio04/user/:type", getUsers);

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let type = req.params.type as string;
        let name = req.query.name as string;
        let order = req.query.order as string;
        let sort = req.query.sort as string;
        let size = 5;
        let page = Number(req.query.page);
        let offset = size * (page - 1);

        if (!name && !type) {
            res.send(await connection("aula49_exercicio"))
        } else {
            if(!order && !sort) {
                order = "name"
                sort = "DESC"
            }
            if (!page || isNaN(page)) {
                page = 1
            }

            const users = await connection.raw(`
            SELECT * FROM aula49_exercicio
            WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"
            ORDER BY ${order} ${sort}
            LIMIT ${size}
            OFFSET ${offset};
        `)
        res.send(users[0])

        }


        
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }

}

export enum type {
    Teacher,
    Operations,
    CX
}
```













