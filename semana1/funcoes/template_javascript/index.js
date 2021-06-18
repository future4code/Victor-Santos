/*----------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -----------------------------

1. Leia o código abaixo

    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    a) O que vai ser impresso no console?
//RESPOSTA:
    10 // - multiplicação do argumento 2 passado para "variavel" por 5, conforme conta definida no bloco da função.
    50 // - multiplicação do argumento 10 passado para "variavel" por 5, conforme conta definida no bloco da função. 

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//REPOSTA: Não acontecerá nada pois quando temos um return na função precisamos do console.log para imprimí-lo.




2. Leia o código abaixo

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) { //expressão anonima
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    a. Explique o que essa função faz e qual é sua utilidade
//RESPOSTA: Esta função gera uma janela com uma caixa de resposta para que o usuário digite um texto, retona esse texto em caixa baixa e diz, através de um boolean, se existe a palavra "cenoura" na frase digitada pelo usuário. Imprime true ou false dependendo se há a palavra "cenoura" no texto.

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` //RESPOSTA: true
         ii.  `CENOURA é bom pra vista` //RESPOSTA: true
         iii. `Cenouras crescem na terra` //RESPOSTA: true //true pois há a palavra cenoura em cenouras.

*/

//-------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ----------------------------------

/*
1. Escreva as funções explicadas abaixo:

    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/
//REPOSTA:
function dadosPessoais() {
    console.log("'Eu sou Victor, tenho 27 anos, moro em São Paulo e sou estudante.'")
}
dadosPessoais()

/*
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

    - Exemplo

        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`
*/
//RESPOSTA:
let nomeUsuario = prompt("Qual é o seu nome?")
let idadeUsuario = Number(prompt("Qual é sua idade?"))
let cidadeUsuario = prompt("Onde você mora?")
let profissaoUsuario = prompt("Qual a sua profissão?")

function dadosPessoais(nome, idade, cidade, profissao) {
    let juncaoDeDados = `"Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}."`
    return juncaoDeDados
}

let imprimirDados = dadosPessoais(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario)
console.log(imprimirDados)

//ou
//Forma mais simples

nomeUsuario = "Victor"
idadeUsuario = 27
cidadeUsuario = "Osasco"
profissaoUsuario = "estudante"

function dadosPessoais(nome, idade, cidade, profissao) {
    console.log(`"Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}."`)
}

dadosPessoais(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario)

/*
2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/
//RESPOSTA: 
function soma(num1, num2) {
    let soma = num1 + num2
    return soma
}

let resultado = soma(7, 35)
console.log(resultado)

//ou
//Forma mais simples

function soma(num1, num2) {
    console.log("A soma entre os números é: ", num1 + num2)
}

soma(7, 35)


/*
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/
//RESPOSTA:
function maiorIgual(num1, num2) {
    let resultado = num1 >= num2
    return resultado
}

let resultadoMaiorIgual = maiorIgual(80, 75)
console.log(resultadoMaiorIgual)


/*
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
//RESPOSTA:
function parOuImpar (numero) {
    let ehPar = numero % 2 === 0
    let resultado = `O número digitado é par? ${ehPar}`
    return resultado
}
let resultadoParOuImpar = parOuImpar(89)
console.log(resultadoParOuImpar)

//ou
//Forma simples
function parOuImpar(numero) {
    console.log(`O número digitado é par? ${numero % 2 === 0}`)
}

parOuImpar(90)


/*
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/
//RESPOSTA:
function tamanhoDaMensagem(mensagem) {
    let tamanhoMensagem = mensagem.length
    let imprimirTexto = [`Sua mensagem tem ${tamanhoMensagem} caracteres. Sua mensagem em minúsculas é: ${mensagem.toLowerCase()}`]
    return imprimirTexto
}

resultado = tamanhoDaMensagem("Olá Lovelace! Meu nome é Victor!")
console.log(resultado)

//ou
//Forma Simples

function tamanhoMensagem(mensagem) {
    console.log(`Tamanho mensgame: ${mensagem.length}. Mensagem em letras minúsculas: ${mensagem.toLowerCase()}`)
}

tamanhoMensagem("Olá Lovelace. Meu nome é Victor!")

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
*/
//RESPOSTA:
let primeiroNumero = Number(prompt("Insira um número:"))
let segundoNumero = Number(prompt("Insira outro número:"))

function soma(num1, num2) {
    let soma = num1 + num2
    return soma
}

function subtracao(num1, num2) {
    let subtracao = num1 - num2
    return subtracao
}

function multiplicacao(num1, num2) {
    let multiplicacao = num1 * num2
    return multiplicacao
}

function divisao(num1, num2) {
    let multiplicacao = num1 / num2
    return multiplicacao
}

let resultadoSoma = soma(primeiroNumero, segundoNumero)
console.log(`Resultado soma: ${resultadoSoma}`)
let resultadoSubtracao = subtracao(primeiroNumero, segundoNumero)
console.log(`Resultado subtração: ${resultadoSubtracao}`)
let resultadoMultiplicacao = multiplicacao(primeiroNumero, segundoNumero)
console.log(`Resultado multiplicacão: ${resultadoMultiplicacao}`)
let resultadoDivisao = divisao(primeiroNumero, segundoNumero)
console.log(`Resultado divisão = ${resultadoDivisao}`)

//ou
//Forma Simples

primeiroNumero = Number(prompt("Digite um número:"))
segundoNumero = Number(prompt("Digite outro número:"))

function somaSubMultDiv (num1, num2) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2
    console.log(`Resultado soma: ${soma}
    Resultado subtração: ${subtracao}
    Resultado Multiplicação: ${multiplicacao}
    Resultado Divisão: ${divisao}`)
}

let resultadoFinal = somaSubMultDiv(primeiroNumero, segundoNumero)


/*------------------ DESAFIOS ------------------

1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/

let imprimirParametro = (param1) => {
    console.log(param1)
}

soma = (primeiroValor, segundoValor) =>{
    soma = primeiroValor + segundoValor
    imprimirParametro(`A soma entre ${primeiroValor} e ${segundoValor} é:  ${soma}`)
}

soma(8, 6)


/*
2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
*/
//RESPOSTA:

function pitagoras(cateto1, cateto2) {
    let valorHipotenusa = (cateto1 ** 2) + (cateto2 ** 2)
    valorHipotenusa = Math.sqrt(valorHipotenusa)
    return valorHipotenusa
}

resultado = pitagoras(9, 12)
console.log(`A hipotenusa do triangulo é: ${resultado}.`)

//ou
//Math.sqrt(numero ou var) - faz a raiz quadrada de um número
//Math.pow (numero ou var) - faz a potencia de um número
//Obs: Pesquisar como fazer raiz quadrada sem usar o Math.sqrt

function calcularHipotenusa (cateto1, cateto2) {
    let calculoHipotenusa = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
    calculoHipotenusa = Math.sqrt(calculoHipotenusa)
    return calculoHipotenusa
}

let resultadoHipotenusa = calcularHipotenusa(9, 12)
console.log(`A hipotenusa do triângulo é: ${resultadoHipotenusa}.`)


