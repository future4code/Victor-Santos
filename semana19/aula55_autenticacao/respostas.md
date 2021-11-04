**EXERCÍCIO 01**

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.
*O uso dele é simples, veja abaixo:*
```
import {v4} from "uuid"

const id = v4();

console.log("Generated Id:", id);
```

*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
Resposta: Utilizar strings para gerar ids é muito mais seguro do que apenas números, principalmente utilizando a lib uuid, onde torna quase impossível a repetição de um id além de dificultar o seu descobrimento.

*b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*
```tsx
import { v4 } from "uuid";

export class GeneratorId {
    public genereteId(): string {return v4()}
}
```

**EXERCÍCIO 02**
Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:
```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

*a. Explique o código acima com as suas palavras.*
Resposta: O código acima é um endpoint para criação de novos usuários na tabela "userTableName". Possui um trecho de connetion para que seja possível se conectar com o banco de dados e o endpoint resposável por criar o usuário com as informações id, email e password.

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
Resposta:
```
 CREATE TABLE user_aula55 (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(64) UNIQUE,
        password VARCHAR(64) NOT NULL
    );
```

*c. Pela mesma justificativa do exercício anterior, crie uma função responsável por salvar usuários no banco.*
Resposta:
```tsx
import {Request, Response} from "express";
import {connection} from "../data/connection";
import { GeneratorId } from "../services/GeneratorId";
import { User } from "../type";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = new GeneratorId().genereteId();

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha todos os campos corretamente")
        }

        const [user] = await connection("user_aula55")
        .where({email})

        if (user) {
            res.statusCode = 409;
            throw new Error("Usuário já cadastrado")
        }

        const newUser: User = ({id, email, password});

        await connection("user_aula55")
        .insert(newUser);

        res.status(201).send(newUser);

    } catch(error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}
```

**Exercício 03**
Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

a. O que a linha as string faz? Por que precisamos usar ela ali?
Resposta: "as string" é utilizado para informar que o valor se trata de uma string. Neste caso, como o process.env.JWT_KEY se trata de uma key que deve ser uma string vinda do arquivo .env, "as string" informa que este valor é uma variável.

b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
```tsx
export class Authenticator {
    public generatorToken(payload: authenticationData): string {
        const token: string = sign(
            {id: payload},
            String(process.env.JWT_KEY),
            {expiresIn: "10h"}
        );

        return token;
    };
```

**EXERCÍCIO 04**
Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:

- *Verbo/Método*: POST
- *Path*: `/user/signup`
- *Input:* O body da requisição deve ser
    
```json
{
	"email": "email do usuário",
	"password": "senha do usuário"
}
```

- *Output*: O body da resposta deve ser
    
```json
{
    "token": "token gerado pelo jwt"
}
```

*a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

*b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

*c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
Reposta:
```tsx
import {Request, Response} from "express";
import {connection} from "../data/connection";
import { GeneratorId } from "../services/GeneratorId";
import { User } from "../type";
import {Authenticator} from "../services/Authenticator";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = new GeneratorId().genereteId();

        if (!email || !password || password.length < 6 || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("Preencha todos os campos corretamente")
        }

        const [user] = await connection("user_aula55")
        .where({email})

        if (user) {
            res.statusCode = 409;
            throw new Error("Usuário já cadastrado")
        }

        const newUser: User = ({id, email, password});

        await connection("user_aula55")
        .insert(newUser);

        const token = new Authenticator().generatorId({id})

        res.status(201).send({token, newUser});

    } catch(error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}
```

**EXERCÍCIO 05**
No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 

a. Crie uma função que retorne as informações de um usuário a partir do email
Resposta:
```tsx
export const getUserByEmail: string = async (email: string): Promise<any> => {
    const {email} = req.body;
    const result = await connection("users_aula55")
    .where({email});

    return result;
};
```


**EXERCÍCIO 06**
Agora, vamos implementar o endpoint de login, com as seguintes especificações:

- *Verbo/Método*: POST
- *Path*: `/user/login`
- *Input:* O body da requisição deve ser
    
    ```json
    {
    	"email": "email do usuário",
    	"password": "senha do usuário"
    }
    ```
- *Output*: O body da resposta deve ser
    
    ```json
    {
    	"token": "token gerado pelo jwt"
    }
    ```
    

*a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

*b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
Resposta:
```tsx
import {Request, Response} from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;

        const [user] = await connection("user_aula55")
        .where({email});

        if(!email.includes("@") || !email) {
            throw new Error("Favor preencher o email corretamente");
        };
        
        if (!user || user.password !== password) {
            res.statusCode = 401
            throw new Error("Unauthorized")
        };

        const token = new Authenticator().generatorToken({id: user.id});

        res.send(token);

    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send("Internal server error!");
        } else {
            res.send(error.message);
        };
        
    };
};
```

**EXERCÍCIO 07**
Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma função que recebe o token e devolve as informações do usuário salvas nele. Veja o exemplo abaixo:

```tsx
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

*a. O que a linha `as any` faz? Por que precisamos usá-la ali?*
Resposta: "as any" informa que o método na const payload pode receber qualquer resposta e esta sendo utilizado para que a função não quebre.

*b. Crie uma função que realize a mesma funcionalidade da função acima*
Resposta:
```tsx
public getTokenData(token: string): authenticationData | null {
        try {
            const tokenData = verify(
                token,
                String(process.env.JWT_KEY)
            ) as authenticationData
            return {id: tokenData.id}
        } catch (error: any) {
            console.log(error)
            return null
        };
    };
```

**EXERCÍCIO 08**
Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:

- *Verbo/Método*: GET
- *Path*: `/user/profile`
- *Input:* Deve receber, nos headers, o token de autenticação:
    
    ```
    Authorization: token.do.usuario
    ```
    
- *Output*: O body da resposta deve ser
    
    ```json
    {
    	"id": "id do usuário",
    	"email": "email do usuário"
    }
    ```
    

*a. Comece criando uma função no data que retorne o usuário a partir do id*

*b. Crie o endpoint com as especificações passadas*
Resposta:
```tsx
import {Request, Response} from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const getUser = async (req: Request, res: Response): Promise <void> => {
    try {
        const {email} = req.query
        const token = req.headers.authorization as string;

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData) {
            res.statusCode = 401
            throw new Error("Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho");
        };
        console.log(tokenData.id)

        const [user] = await connection("user_aula55")
        .where({id: tokenData.id})

        console.log(user)
               
        res.status(200).send({id: user.id, email: user.email})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}
```





