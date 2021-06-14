//------------------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------------------------------

/* 1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
R: 10
R2: 10 5

2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
R: 10 10 10

3- Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
R: 
let jornadaDiariaTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebepod dia?")
alert(`Você recebe ${salarioPorDia/jornadaDeTrabalho} por hora`)
*/


//------------------------ EXERCÍCIOS DE ESCRITA DE CÓDIGO -----------------------------------------------


//----------------------------------- PROGRAMA 1 ------------------------------------------------------------------------

let nome
let idade
console.log("A variável nome é do tipo:", typeof nome)
console.log("A variável idade é do tipo:", typeof idade)

/* d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
R: Foi impresso o tipo undefined pois não inicializa-mos as variáveis, ou seja, não declaramos nenhum valor nelas.
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log("O tipo da variável nome é:", typeof nome) //Tipo String
console.log("O tipo da variável idade é:", typeof idade) //Tipo String
/*f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
R: Notei que as variáveis alteraram de undefined para string graças aos valores que foram atribuidos a elas através do prompt.
*/

console.log("Olá", nome, "você tem", idade, "anos!")



//----------------------------------- PROGRAMA 2 -----------------------------------------------

var perguntaRoupa = "Você esta usando uma roupa azul hoje?"
var perguntaAlmoço = "Você almoçou hoje?"
var perguntaFrio = "Você esta sentindo frio neste momento?"

respostaRoupa = prompt(perguntaRoupa)
respostaAlmoço = prompt(perguntaAlmoço)
respostaFrio = prompt(perguntaFrio)

console.log(perguntaRoupa, "-", respostaRoupa)
console.log(perguntaAlmoço, "-", respostaAlmoço)
console.log(perguntaFrio, "-", respostaFrio)


//----------------------------------- PROGRAMA 3 -----------------------------------------------
let a = 10
let b = 25

let c = a
a = b
b = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



//----------------------------------- DESAFIO --------------------------------------------------
//Para somar devemos usar a conversão de tipo(String para Number)
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

let soma = primeiroNumero + segundoNumero
let multiplicacao = primeiroNumero * segundoNumero

console.log("O primeiro número", primeiroNumero, "somado com o segundo número", segundoNumero, "resulta em:", soma)
console.log("O primeiro número", primeiroNumero, "multiplicado pelo segundo número", segundoNumero, "resulta em:", multiplicacao)
