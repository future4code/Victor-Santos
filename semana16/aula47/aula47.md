**//Exercício 01**
**//Utilize os *raws* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.**

**//a. Explique como é a resposta que temos quando usamos o `raw`.**
```
app.get("/actor01/:id", async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).send(await getActorById(id))
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
```
*//Resposta:*
//Quando utilizamos o raw, a querie devolve dois arrays, um com os objetos da minha tabela e outro com objetos que contém alguns outros dados sobre a tabela, dados como as informações referentes a estrutura da tabela.

**//b. Faça uma função que busque um ator pelo nome;**
*//Resposta:*
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = ${name}
    `)
    return result;
};
```

**//c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.**
```
const countActorsByGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*), gender FROM Actor
        WHERE gender = ${gender}
    `)
    return result[0]
}
```


**// Exercício 02**
**//Utilize os query builders para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.**

**//a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão**
*//Pegar atores*
*// const actors = await connection("Actor")*
*//Resposta:*
const updateActors = async (salary: number, id: string): Promise<any> => {
    const result = await connection("Actor")
        .update({salary: salary})
        .where({id: id})
}


**//b. Uma função que receba um id e delete um ator da tabela**
*//Resposta:*
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({id: id})
}

**//c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`**
*//Resposta:*
const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("salary as averageSalary")
    .where({gender: gender})

    return result[0]
}
app.get("/actor02/:gender", async (req, res) => {
    try {
            
        res.status(200).send(await avgSalaryByGender(req.params.gender))

    } catch (error: any) {
        res.send(error.sqlMessage || error.message);
    }
})


**//Exercício 03**
**//a. Crie um endpoint com as especificações acima**
```
app.get("/actor03/:id", async (req, res) => {
    try {
        const id = req.params.id

        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
})
```


**//b. Crie um endpoint agora com as seguintes especificações:**
*//- Deve ser um GET (`/actor`)*
*//- Receber o gênero como um *query param* (`/actor?gender=`)*
*//- Devolver a quantidade de atores/atrizes desse gênero*
```
app.get("/actor03", async (req, res) => {
    try {
        const gender = req.query.gender as string;
        const result = await countActorsByGender(gender)
        res.status(200).send(result)
    } catch (error: any) {
        res.send(error.sqlMessage || error.message);
    }
})
```


**//EXERCÍCIO 04**
**//Crie um endpoint para cada uma das especificações abaixo:**

**a.**
*- Deve ser um PUT (`/actor`)*
*- Receber o salário e o id pelo body*
*- Simplesmente atualizar o salário do ator com id em questão*
*Resposta:*
```
app.put("/actor04", async (req, res) => {
    try {
        await updateActors(req.body.salary, req.body.id)
        res.status(200).send("Success!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
```

**- b.**
*- Deve ser um DELETE (`/actor/:id`)*
*- Receber id do ator como *path param**
*- Simplesmente deletar o ator da tabela*
```
app.delete("/actor04/:id", async (req, res) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send("Success!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
```