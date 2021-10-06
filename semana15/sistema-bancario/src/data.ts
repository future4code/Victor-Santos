export type userCount = {
    age: number,
    name: string,
    cpf: number,
    dataNascimento: number,
    saldo: number,
    extrato: [
        {
            valor: number,
            data: number,
            descrição: string
        }
    ]
}

export type transacoes = {
    valor: number,
    data: number,
    descricao: string
}

export const users: userCount[] = [

]