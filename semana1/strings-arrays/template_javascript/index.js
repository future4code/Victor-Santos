/*------------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------------------------------------------------------

/*----------------------------------------- Exerício 1 ------------------------------------------------------------------
1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    let array
    console.log('a. ', array)
//RESPOSTA: undefined

    array = null
    console.log('b. ', array)
//REPOSTA: b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
//REPOSTA: 11 - que é a quantidade de elementos da minha array.

    let i = 0
    console.log('d. ', array[i])
//REPOSTA: 3 - vai imprimir o primeiro indice da minha array.

    array[i+1] = 19
    console.log('e. ', array)
//RESPOSTA: A array de indice 1 que é a segunda array passará a valer 19.
[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const valor = array[i+6]
    console.log('f. ', valor)
//RESPOSTA: 9 - Vai imprimir na tela o sétimo elemento da array, ou seja, o que possui o índice 6.

/*----------------------------------------- Exerício 2 ------------------------------------------------------------------
2.  Leia o código abaixo com atenção 

    const frase = prompt("Digite uma frase") //Cria uma janela de resposta.

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //imprime a frase em letras maiusculas substituindo letra a por i e imprime a quantidade de carateres da frase.

   // Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?



//REPOSTA: "SUBI NUM ÔNIBUS EM MARROCOS".(NÃO TEM LETRA A NA FRASE) -  29 (Que é a quantidade de caracteres na string recebida pela variável frase).

*/





//------------------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------------------------------------------------------

/*----------------------------------------- Exerício 1 ------------------------------------------------------------------
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/
let nome = prompt("Qual é o seu nome?")
let email = prompt("Digite seu email:")

console.log(`O e-mail '${email}' foi cadastrado com sucesso. Seja bem-vinda(o), '${nome}'!`)


/*----------------------------------------- Exerício 2 ------------------------------------------------------------------
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:  
*/
let comidasPreferidas = ["Poke", "Lamen", "Pizza", "Cogumelo recheado", "Nachos Veg"]

//  a) Imprima na tela o array completo
console.log(comidasPreferidas)

//  b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log(`Essas são as minhas comidas perferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

//  c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
let comidaUsuario = prompt("Qual é a sua comida preferida?")
comidasPreferidas[1] = comidaUsuario
console.log(comidasPreferidas)


/*----------------------------------------- Exerício 3 ------------------------------------------------------------------
3. Faça um programa, seguindo os passos:
*/
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//Devo definir como uma array para que o comando push funcione.
let listaDeTarefas = [] 


//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let perguntaUm = prompt("Cite uma tarefa que voce deve realizar hoje:")
let perguntaDois = prompt("Cite uma segunda tarefa que você precisa ralizar hoje:")
let perguntaTres = prompt("Cite uma terceira tarefa que você precisa realizar hoje:")
listaDeTarefas.push(perguntaUm)
listaDeTarefas.push(perguntaDois)
listaDeTarefas.push(perguntaTres)

//c) Imprima o array na tela
console.log(listaDeTarefas)


//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
//Realizando com o - 1 após o prompt
tarefaIndice = Number(prompt("Digite um numero de 1 a 3 para informar uma tarefa que você ja realizou: (ex: 1 para a 1ª, 2 para a 2ª ou 3 para a 3ª"))
let tarefaIndiceAtualizado = listaDeTarefas[tarefaIndice-1] //Armazenar o número da tarefa que ele escolheu -1 para adequar ao indice do JS.
console.log(`Você ja realizou a tarefa ${tarefaIndiceAtualizado}`)
/*Realizando com o - 1 no prompt já
let tarefaIndice = Number(prompt("Digite um numero de 1 a 3 para informar uma tarefa que você ja realizou: (ex: 1 para a 1ª, 2 para a 2ª ou 3 para a 3ª")) -1
console.log(`Você ja realizou a tarefa: ${listaDeTarefas[tarefaIndice]}`)
*/


//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice([tarefaIndice-1], 1) //remover um ou mais elementos da array


//f) Imprima o array na tela
console.log(`Tarefas pendentes: ${listaDeTarefas.join(', ')}`)



//Para acrescentar um espaço entre as strings da array utlizo .join(' ')











