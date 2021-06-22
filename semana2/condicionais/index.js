//---------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1. Leia o código abaixo:

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }

    a) Explique o que o código faz. Qual o teste que ele realiza? 
//RESPOSTA:
O código solicita que o usuário digite um número e transforma essa resposta de string para number.
Depois disso, ele faz um condicional onde se o resto da divisão do número que ele informou por 2 for igual a 0 então imprime a mensagem "Passou no teste.", senão, imprime a mensagem "Não passou no teste."

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
//RESPOSTA:
Para os número pares, ou seja, que o resto da divisão por 2 é igual a 0.

    c) Para que tipos de números a mensagem é "Não passou no teste"?
//RESPOSTA:
Para os número ímpares, ou seja, que o resto da divisão por 2 é diferente de 0.


2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco

    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


    a) Para que serve o código acima?
//RESPOSTA:
O código acima serve para informar o preço de uma fruta baseado na resposta do usuário, ou seja, na fruta que ele esta procurando.

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//RESPOSTA:
O preço da fruta "Maçã" é R$ 5.


    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//RESPOSTA:
Imprime na tela o preço da fruta que está abaixo, no case de Pêra, imprime o preço R$ 5.



3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    a) O que a primeira linha está fazendo?
//REPOSTA:
A primeira linha está criando uma variável numero para armazenar a respota do prompt que solicita ao usuário que digite um número.


    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//REPOSTA:
Caso o usuário digite a resposta 10 a mensagem que aparecerá no terminal será: Esse número passou no teste
Uncaught ReferenceError: mensagem is not defined


Caso o usuário digite a resposta -10 a mensagem que aparecerá no terminal será:
Uncaught ReferenceError: mensagem is not defined
A outra mensagem não aparecerá pois o resultado da minha condição em if retorna false e o bloco de if só será executado se o resultado da condição for true.


    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//REPOSTA:
Aparecerá erro nos dois número digitados pelo usuário.
Caso o usuário digite 10, o console.log dentro do bloco de if será executado, pois a condição determinada (numero > 0) é true e sempre que esta condição for true, o bloco após o if é executado. 
Já em relação a variável mensagem declarada no escopo local dentro do bloco de if, não pode ser acessada no escopo global através do console.log(mensagem), portanto, retornará uma mensagem de erro dizendo que a variável mensagem não foi definida, independente se o bloco for executado ou não.
Uncaught ReferenceError: mensagem is not defined
*/


//----- EXERCÍCIOS DE ESCRITA DE CÓDIGO ------
/*
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    */
//RESPOSTA:
const idadeUsuario = Number(prompt("Qual é a sua idade?"))


/*
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
*/
//RESPOSTA:
const idadeNumUsuario = Number(idadeUsuario)

/*
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/
//RESPOSTA:

const verificadorDePermissaoParaDirigir = (idade) => {
    if(idade >= 18) {
        return "Parabéns! Você pode dirigir."
    } else {
        return "Que pena! Você não pode dirigir."
    }
}

console.log(verificadorDePermissaoParaDirigir(idadeNumUsuario))


/*
2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica

        Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

        Se o usuário digitar "V", a saída deve ser:

        "Boa Tarde!"
*/
const turnoDoAluno = prompt("Em qual turno do dia você estuda? Responda M para matutino, V para vespertino e N para noturno.").toLowerCase()

 const mensagemParaOAluno = (turno) => {
     if(turno === "m"){
         return "Bom Dia!"
     } else if(turno === "v") {
         return "Boa Tarde!"
     } else if(turno === "n") {
         return "Boa Noite!"
     }
 }

 console.log(mensagemParaOAluno(turnoDoAluno))

/*
3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
    - 💡 Dica

        Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
*/
const mensagemAluno = (turno) => {
    switch (turno){
        case "m":
            return "Bom Dia!"
            break
        case "v":
            return "Boa Tarde!"
            break
        case "n":
            return "Boa Noite!"
            break
        default:
            return "Não entendi o que você digitou."
    }
}

console.log(mensagemAluno(turnoDoAluno))

/*
4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`
*/
const filme = {
    genero: prompt("Qual é o genero do filme que iremos assitir?").toLowerCase(),
    valorIngresso: Number(prompt("Qual é o valor do ingresso? R$"))
}

const assistiremosAoFilme = (genero, valorIngresso) => {
if(genero === "fantasia" && valorIngresso < 15) {
    return "Bom filme!"
} else {
    return "Escolha outro filme :("
}
}

console.log(assistiremosAoFilme(filme.genero, filme.valorIngresso))



//------- DESAFIOS
/*
1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
    - Exemplo

        Entradas: `"fantasia"` | `"10"`

        Saída:

        [prompt] Qual snack que você quer comprar?

        Entrada: `"chocolate"`

        Saída:

        "Bom filme!"
        "Aproveite o seu chocolate"
*/

const verificadorDeFilme = (genero, valorIngresso) => {
if(genero === "fantasia" && valorIngresso < 15) {
    let lancheUsuario = prompt("Qual lanchinho você gostaria de comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lancheUsuario}.`)
} else {
    return "Escolha outro filme :("
}
}

verificadorDeFilme(filme.genero, filme.valorIngresso)


/*
2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos

    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

    - Tabela de Preços

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)

    - Exemplo de saída: Jogo Nacional

        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ 1980
        Valor total:  R$ 19800


    - Exemplo de saída: Jogo Internacional

        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ 482.92682926829275
        Valor total:  U$ 4829.2682926829275
*/

let informacoesParaCompraDeIngressos = {
    nomeUsuario: prompt("Digite seu nome completo:"),
    tipoDeJogo: prompt("Qual o tipo do jogo? Responda IN para jogo internacional ou DO para jogo doméstico").toUpperCase(),
    etapaDoJogo: prompt("Qual a etapa do jogo? Responda SF para semi-final, DT para decisão de terceiro lugar e FI para final").toUpperCase(),
    categoriaDoIngresso: Number(prompt("Qual a categoria do ingresso? 1, 2, 3 ou 4")),
    quantidadeDeIngressos: Number(prompt("Qual a quantidade de ingressos: "))
}

let compraDeIngresso = (nome, tipoJogo, etapaJogo, categoriaIngresso, quantidadeIngressos) => {
    console.log("-----Dados da compra-----")
    
    console.log("Nome do Cliente:", nome)
    
    //Tipo do jogo
    if(tipoJogo === "IN"){
        console.log("Tipo de Jogo: Internacional")
    } else if(tipoJogo === "DO"){
        console.log("Tipo de jogo: Nacional")
    
    }

    //Etapa do Jogo
    if(etapaJogo === "SF"){
        console.log("Etapa do jogo: Semi-Final")
    } else if(etapaJogo === "DT"){
        console.log("Etapa do jogo: Terceiro Lugar")
    } else if (etapaJogo === "FI"){
        console.log("Etapa do Jogo: Final")
    }

    //Categoria
    console.log("Categoria:", categoriaIngresso)
    
    //Quantidade de ingressos
    console.log("Quantidade de Ingressos:", quantidadeIngressos, "ingressos.")
    
    //Valores
    console.log("---Valores---")
    //Valor do Ingresso
    let valorDoIngresso = (categoria1, categoria2, categoria3, categoria4) => {
        if(tipoJogo === "DO" && etapaJogo === "SF" && categoriaIngresso === 1) {
            let valorDoIngresso = 1320
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "SF" && categoriaIngresso === 2){
            valorDoIngresso = 880
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "SF" && categoriaIngresso === 3) {
        valorDoIngresso = 550
        return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "SF" && categoriaIngresso === 4){
        valorDoIngresso = 220
        return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "DT" && categoriaIngresso === 1){
            valorDoIngresso = 660
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "DT" && categoriaIngresso === 2){
            valorDoIngresso = 440
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "DT" && categoriaIngresso === 3){
            valorDoIngresso = 330
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "DT" && categoriaIngresso === 4){
            valorDoIngresso = 170
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "FI" && categoriaIngresso === 1){
            valorDoIngresso = 1980
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "FI" && categoriaIngresso === 2){
            valorDoIngresso = 1320
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "FI" && categoriaIngresso === 3){
            valorDoIngresso = 880
            return valorDoIngresso
        } else if(tipoJogo === "DO" && etapaJogo === "FI" && categoriaIngresso === 4){
            valorDoIngresso = 330
            return valorDoIngresso
        } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoriaIngresso === 1) {
            let valorDoIngresso = 1320 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "SF" && categoriaIngresso === 2){
            valorDoIngresso = 880 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "SF" && categoriaIngresso === 3) {
        valorDoIngresso = 550 * 4.10
        return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "SF" && categoriaIngresso === 4){
        valorDoIngresso = 220 * 4.10
        return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "DT" && categoriaIngresso === 1){
            valorDoIngresso = 660 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "DT" && categoriaIngresso === 2){
            valorDoIngresso = 440 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "DT" && categoriaIngresso === 3){
            valorDoIngresso = 330 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "DT" && categoriaIngresso === 4){
            valorDoIngresso = 170 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "FI" && categoriaIngresso === 1){
            valorDoIngresso = 1980 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "FI" && categoriaIngresso === 2){
            valorDoIngresso = 1320 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "FI" && categoriaIngresso === 3){
            valorDoIngresso = 880 * 4.10
            return valorDoIngresso
        } else if(tipoJogo === "IN" && etapaJogo === "FI" && categoriaIngresso === 4){
            valorDoIngresso = 330 * 4.10
            return valorDoIngresso
        }
}
    console.log("Valor do Ingresso: R$", valorDoIngresso(categoriaIngresso).toFixed(2))
    //Valor Total
    let valorTotal = (quantidadeIngressos, valorDoIngresso) => {
        if(tipoJogo === "DO"){
            valorTotal = quantidadeIngressos * valorDoIngresso
        } else if (tipoJogo === "IN"){
            valorTotal = (quantidadeIngressos * valorDoIngresso) * 4.10
        }
        return valorTotal
    }
    console.log("Valor total: R$", valorTotal(quantidadeIngressos, valorDoIngresso).toFixed(2))
}

compraDeIngresso(informacoesParaCompraDeIngressos.nomeUsuario, informacoesParaCompraDeIngressos.tipoDeJogo, informacoesParaCompraDeIngressos.etapaDoJogo, informacoesParaCompraDeIngressos.categoriaDoIngresso, informacoesParaCompraDeIngressos.quantidadeDeIngressos)




