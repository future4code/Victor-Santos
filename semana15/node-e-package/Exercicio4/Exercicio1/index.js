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
const imrpimeNomeEIdade = () => {
    const name = process.argv[2]
    const age = Number(process.argv[3])
    const novaIdade = age + 7
    console.log(`Olá, ${name}! Você tem ${age} anos. em sete anos você terá ${novaIdade}.`)
}
console.log(imrpimeNomeEIdade())
