/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) 
// RESPOSTA: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// RESPOSTA: b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) 
// RESPOSTA: c. true

console.log("d. ", typeof resultado) 
// RESPOSTA: d. Boolean



2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

RESPOSTA:
/* Resposta: Será impresso no console a concatenação das respostas dos dois prompts armazenados nas variáveis primeiroNumero e segundoNumero. 
Isto ocorre pois a resposta do prompt será armazenda como uma String e não como um Number. 
O "+" não faz soma de strings, mas sim uma concatenação entre as duas. 
Para que de certo esta soma devemos transformar em number as respostas dos prompts armazenadas nas variáveis como strings.



3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

RESPOSTA:
/* Maneira correta:
let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero = Number(prompt("Digite outro número!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

//---------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----------------------------

/*------------------Exercício 1 ---------------------
1. Faça um programa que: 

    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)                    */

let idadeUsuario = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

let comparadorIdade = idadeUsuario > idadeAmigo // Operador de comparação sempre retorna um boolean
console.log("Sua idade é maior que a do seu melhor amigo?", comparadorIdade)

let diferencaIdade = idadeUsuario - idadeAmigo
console.log("Sua idade é ", idadeUsuario, "anos e a do seu melhor é amigo", idadeAmigo, "anos. A diferença de idade entre vocês é de", diferencaIdade, "anos.")

/*------------------ Exercício 2 --------------------
2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código  .            */

//a.
let numeroPar = Number(prompt("Insira um número par:"))

//b. 
let restDivisao = numeroPar % 2
console.log(restDivisao)

/*c. RESPOSTA:
Todos os números pares testados no código retornaram com a resposta 0 na variável, pois o resto da divisão de qualquer número par por 2 é igual a 0. Graças a isso, todo número que o resto da divisão dele por 2 for igual a 0 observamos que é um número par.
Números testados 
let teste1 = 2 % 2
console.log(teste1) // 0
let teste2 = 8 % 2
console.log(teste2) // 0
let teste3 = 256 % 2
console.log(teste3) // 0
*/

/*d. RESPOSTA:
Se por acaso o usuário inserir um número que seja ímpar na resposta do prompt, o resultado retorna 1, inclusive se o número digitado for 1. Portanto, todo resto da divisão de um número ímpar por 2 retornará o valor 1, graças a isso sabemos se um número é ímpar
let teste1 = 1 % 2
console.log(teste1) // 1
let teste2 = 85 % 2
console.log(teste2) // 1
let teste3 = 891 % 2
console.log(teste3) // 1
*/


/*--------------------- Exercício 3 ---------------------------
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas                                                              */

let idadeAnos = Number(prompt("Quantos anos você tem?"))
console.log("Você tem", idadeAnos, "anos.")

//a.
let idadeMeses = idadeAnos * 12 //Doze meses por ano
console.log("Sua idade em meses é:", idadeMeses) // teste com 27 anos = 324 meses 

//b.
let idadeDias = idadeAnos * 365
console.log("Sua idade em dias é:", idadeDias) // teste com 27 anos = 9855 dias 

//c.
let idadeHoras = idadeDias * 24 //Idade em dias vezes o número de horas que um dia possui.
console.log("Sua idade em horas é:", idadeHoras) // teste com 27 anos = 236520 horas.


/*------------------- Exercício 4 --------------------------
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true                        */

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Dgite outro número:"))

// O primeiro número é maior que o segundo?
let ehMaior = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo?", ehMaior)
//RESPOSTA: FALSE

//O primeio número é igual ao segundo número?
let ehIgual = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo?", ehIgual)
//RESPOSTA: TRUE

//O primeiro número é divisívek pelo segundo?
let ehDivisivel = primeiroNumero % segundoNumero === 0
console.log("O primeiro número é divisível pelo segundo?", ehDivisivel)
//RESPOSTA: TRUE

//O segundo número é divisível pelo primeiro?
let ehDivisivel2 = segundoNumero % primeiroNumero === 0
console.log("O segundo número é divisível pelo primeiro?", ehDivisivel2)
//RESPOSTA: TRUE


//---------------- Desafio -----------------

/* 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
        ```

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
        ```

    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter         */

//a.
let GRAUS_FAHRENHEIT = 77
let KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log("O valor de 77ºF em kelvin é", KELVIN + "K")

//b.
let GRAUS_CELSIUS = 80
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
console.log("O valor de 80ºC em fahrenheit é", GRAUS_FAHRENHEIT + "ºF")

//c.
GRAUS_CELSIUS = 30
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log("O valor de 30ºC em fahrenheit é", GRAUS_FAHRENHEIT + "ºF e em kelvin é", KELVIN + "K")

//d.
GRAUS_CELSIUS = Number(prompt("Qual a temperatura atual em ºC?"))
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log("O valor de", GRAUS_CELSIUS + "ºC em fahrenheit é", GRAUS_FAHRENHEIT + "ºF e em kelvin é", KELVIN + "K")



/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

*/

//a.
let consumoEmQWH = 280
let valorQWH = 0.05
let valorAPagar = consumoEmQWH * valorQWH
console.log("O valor a ser pago por uma residência que consome", consumoEmQWH + "quilowatt-hora de energia é R$" +  valorAPagar)

//b.
consumoEmQWH = 280
valorQWH = 0.05
let desconto15 = 0.15
valorAPagar = consumoEmQWH * valorQWH
let valorComDesconto = valorAPagar - valorAPagar * desconto15
console.log("Aplicando o valor de 15% de desconto, sua conta passa a valer R$" + valorComDesconto)






