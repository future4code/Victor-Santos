const {yellow, green, red, blue} = require("chalk")
//Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
//Resposta:
const result = () => {
    const operacao = process.argv[2]
    // console.log(operacao)
    const num1 = Number(process.argv[3])
    // console.log(num1)
    const num2 = Number(process.argv[4])
    console.log(num2)
    switch(operacao) {
        case "soma":
            return `A soma entre ${num1} e ${num2} = ${num1 + num2}`
            break;
        case "subtracao":
            return `A subtração entre ${num1} e ${num2} = ${num1 - num2}`
            break;
        case "multiplicacao":
            return `A multiplicação entre ${num1} e ${num2} = ${num1 * num2}`
            break;
        case "divisao":
            return `A divisão entre ${num1} e ${num2} = ${num1 / num2}`
            break;
        case "restoDaDivisao":
            return `O resto da divisão entre ${num1} e ${num2} = ${num1 % num2}`
            break;
    }
}
console.log(red(result()))
