//------------ EXERCCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------
/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
//RESPOSTA:
O código é uma estrutura de repetição com a ferramenta for. Criou-se uma estrutura for com a variável i de inicialização, uma condição onde o bloco de execução será executado até que essa condição retorne false(i seja >= 5), o bloco de execução onde será armazenado na variável valor o valor + o valor do i e um incremento onde, após executar o bloco, a variável i retorna com o próximo número, que será o i + 1 e este bloco será executado enquanto a condição for true. Por fim, o console.log vai imprimir a soma total de todos os números armazenados em valor durante a execução do código(0, 1, 2, 3, 4).

O código está somando todos os números menores que 5 e retornando esta soma ao final: 10.



2. Leia o código abaixo:

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }

    a) O que vai ser impresso no console?
//RESPOSTA:
Será impresso no console, todos os números que pertencem a array lista e forem maiores que 18.
19
21
23
25
27
30



    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//REPOSTA:
Sim, o for of é suficiente. Para acessar o índice de cada elemento retiramos a condicional e pedimos para imprimir 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let i = 0
    for (let numero of lista) {
        console.log(numero.indexOf(i))
      if (numero > 18) {
//     console.log(numero)
//     console.log(lista.indexOf(numero))
//  }
// }
    }



3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }


    - 💡 Dica

        Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)

//RESPOSTA:
Caso o usuário digite o número 4 no prompt, esta estrutura de repetição será executada 4 vezes. Em cada vez que ela for executada ela imprime uma linha com a quantidade de asteriscos atualizado pela segunda estrutura de repetição.
*
**
***
****

*/

//-------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -----------------
/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
 
    let perguntaUsuarioQtdPets = Number(prompt("Quantos animais de estimação você tem?"))

    //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    //RESPOSTA:
    if(perguntaUsuarioQtdPets === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    }
    for(contador = 0; contador > perguntaUsuarioQtdPets.length; contador++){

    }

    /*
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    - 💡 Dica

        Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    */
    //RESPOSTA:
    // let quantidadePetsUsuario = [Number(prompt("Quantos animais de estimação você tem?"))]
    // let imprimirNomes = (quantidadePetsUsuario) => {
    //     if(quantidadePetsUsuario === 0) {
    //         mensagem = "Que pena! Você pode adotar um pet."
    //     }
    //     return mensagem
    // }
    // console.log(imprimirNomes(quantidadePetsUsuario))

    //     } else if(quantidadePetsUsuario > 0) {
    //         while(quantidadePetsUsuario > 0) {
    //             guardarNomePet = [prompt("Quais os nomes dos pets?")]
    //             quantidadePetsUsuario--
    //         }
    //         return guardarNomePet
    //     }
    // }
    
    // imprimirNomes(quantidadePetsUsuario)


    //c) Por fim, imprima o array com os nomes dos bichinhos no console


    let quantidadeDePetsUsuario = Number(prompt("Quantos animais de estimação você possui?"))

    if(quantidadeDePetsUsuario === 0) {
        console.log("Que pena, você pode adotar um pet.")
    }

    let guardarNomes = []

    let imprimirNomes = (quantidadeDePetsUsuario) => {
    while(quantidadeDePetsUsuario > 0) {
        perguntarNomes = prompt("Qual o nome do pet?")
        quantidadeDePetsUsuario--

        guardarNomes.push(perguntarNomes)
        
    }
    return guardarNomes

}
    console.log(imprimirNomes(quantidadeDePetsUsuario))




/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

    a) Escreva um programa que **imprime** cada um dos valores do array original.

    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

    - 💡 Dica

        Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.

    - Exemplo de saídas esperadas

        // Este array será usado para exemplificar as respostas de todos os itens
        const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

        // Resposta item a.
        80
        30
        130
        40
        60
        21
        70
        120
        90
        103
        110
        55

        // Resposta item b.
        8
        3 
        13
        4
        6
        2.1
        7 
        12
        9
        10.3
        11 
        5.5

        // Resposta item c.
        [80, 30, 130, 40, 60, 70, 120, 90, 110] 

        // Resposta item d.
        [ 'O elemento do índex 0 é 80',
          'O elemento do índex 1 é 30',
          'O elemento do índex 2 é 130',
          'O elemento do índex 3 é 40',
          'O elemento do índex 4 é 60',
          'O elemento do índex 5 é 21',
          'O elemento do índex 6 é 70',
          'O elemento do índex 7 é 120',
          'O elemento do índex 8 é 90',
          'O elemento do índex 9 é 103',
          'O elemento do índex 10 é 110',
          'O elemento do índex 11 é 55' ]

        // Resposta e.
        "O maior número é 130 e o menor é 21"
*/
//a.
//RESPOSTA:
let arrayOriginal = [1, 2, 3, 4]

let imprimirValores = (arrayOriginal) => {
    for(let i = 0; i < arrayOriginal.length; i++) {
        let imprimirElemento = arrayOriginal[i]
        console.log(imprimirElemento)
    }
    // for (let array of arrayOriginal) {
    //     console.log(arrayOriginal)
    }


imprimirValores(arrayOriginal)

//b.
//RESPOSTA:

let divisorDeArrayPor10 = (arrayOriginal) =>{
    for(i = 0; i < arrayOriginal.length; i++) {
        let divideElementoPor10 = arrayOriginal[i] / 10
        console.log(divideElementoPor10)
    }
}

divisorDeArrayPor10(arrayOriginal)

//c.
//RESPOSTA:
let imprimirArraysPares = (arrayOriginal) => {
    for(i = 0; i < arrayOriginal.length; i++) {
        imprimirElemento = arrayOriginal[i]
        if(imprimirElemento % 2 === 0) {
            console.log(arrayOriginal[i])
        }
    }

}

imprimirArraysPares(arrayOriginal)


//d.
//RESPOSTA:
//let arrayOriginal = [1, 2, 3, 4]
let imprimirMensagem = (arrayOriginal) => {
    for(i = 0; i < arrayOriginal.length; i++){
        let novoArrayStrings = []
        novoArrayStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)

        console.log(novoArrayStrings)
    }
}

imprimirMensagem(arrayOriginal)

//e.
//RESPOSTA
//let arrayOriginal = [1, 2, 3, 4]
let mostrarMaiorEMenorNumeros = (arrayOriginal) => {
    let maiorNumero = 0
    let menorNumero = 100

    let tam = arrayOriginal.length

    for(i = 0; i < arrayOriginal.length; i++) {
        let numeroAtual = arrayOriginal[i]
        if(numeroAtual > maiorNumero) {
            maiorNumero = numeroAtual
        }
        numeroAtual = array
        if(numeroAtual < menorNumero){
            menorNumero = numeroAtual
        }
    }
    return menorNumero, maiorNumero
}

console.log(mostrarMaiorEMenorNumeros(arrayOriginal))



























