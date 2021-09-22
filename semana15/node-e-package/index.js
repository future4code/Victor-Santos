//Aula 40 Node.js e package.json

//Exercício 1
//a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Resposta:
// console.log(process.argv)

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//Resposta:
/*
const imprimeNomeEIdade = () => {
    const name = process.argv[2]
    const idade = process.argv[3]
    console.log(`Olá, ${name}! Você tem ${idade} anos.`)
}

console.log(imprimeNomeEIdade())
*/

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//Resposta:
/*
const imrpimeNomeEIdade = () => {
    const name = process.argv[2]
    const age = Number(process.argv[3])
    const novaIdade = age + 7
    console.log(`Olá, ${name}! Você tem ${age} anos. em sete anos você terá ${novaIdade}.`)
}
console.log(imrpimeNomeEIdade())
*/


//Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
//Resposta:
/*
const result = () => {
    const operacao = process.argv[2]
    console.log(operacao)
    const num1 = Number(process.argv[3])
    console.log(num1)
    const num2 = Number(process.argv[4])
    console.log(num2)
    switch(operacao) {
        case "soma":
            return `A soma é ${num1 + num2}`
            break;
        case "subtracao":
            return `A subtração é ${num1 - num2}`
            break;
        case "multiplicacao":
            return `A multiplicação é ${num1 * num2}`
            break;
        case "divisao":
            return `A divisão é ${num1 / num2}`
            break;
        case "restoDaDivisao":
            return `O resto da divisão é ${num1 % num2}`
            break;
    }
}
console.log(result())
*/


// Exercício 3
//Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.
/*
const tarefas = ["varrer", "estudar", "lavar roupa", "lavar louça"]

const adicionarTarefa = () => {
    const tarefa = process.argv[2]
    tarefas.push(tarefa)
}

adicionarTarefa()
console.table({tarefas})
*/
