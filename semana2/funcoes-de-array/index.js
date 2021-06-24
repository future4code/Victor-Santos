//---------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------
/*
1.  Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]

    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })

    a) O que vai ser impresso no console?

//RESPOSTA:
Será impresso no console cada elemento do object usuarios e seus respectivos indices que estão agora armazenados no novoArrayA que é do tipo object:

{ nome: "Amanda Rangel", apelido: "Mandi" } 0
{ nome: "Laís Petra", apelido: "Laura" } 1
{ nome: "Letícia Chijo", apelido: "Chijo" } 2



2. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })

    console.log(novoArrayB)

    a) O que vai ser impresso no console?

//RESPOSTA:
A função map cria um novo object baseado no object original onde posso salvá-lo inclusive com alteração acrescentando algo no elemento mas nunca tem o seu tamanho alterado.
Será impresso no console apenas o que esta declarado em nome no object usuarios tudo na mesma linha:

["Amanda Rangel", "Laís Petra", "Letícia Chijo"]





3. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)

    a) O que vai ser impresso no console?
//RESPOSTA:
O filter filtra cada elemento do array e pode retirar alguns itens no novoArray em relação ao array original.
Será impresso no console tudo que esta armazenado nos elementos do object que o valor de apelido for diferente de "Chijo".

0: {nome: "Amanda Rangel", apelido: "Mandi"}
1: {nome: "Laís Petra", apelido: "Laura"}

*/


//------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------
/*
1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]

    a) Crie um novo array que contenha apenas o nome dos doguinhos

    b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

    c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

*/


//a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const arrayNomePets = pets.map((item, index, pets) => { //item é o primeiro parametro da minha map
    return item.nome
 })

console.log(arrayNomePets)



//b.
const apenasSalsichas = pets.filter((item) => {
    if(item.raca === "Salsicha") {
        return true
    } else {
        return false
    }
}) 

console.log(apenasSalsichas)



//c.
const descontoPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
}).map((item) => {
return `Você ganhou um cupom de 10% de desconto para tosar o/a ${item.nome}.`
})

console.log(descontoPoodle)




/* 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    a) Crie um novo array que contenha apenas o nome de cada item

    b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

    c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

    e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

*/
//RESPOSTAS:

//a. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//Como guardar apenas um item no meu novo object. ex: apenas o nome. (produtos.nome)
const novoArrayNome = produtos.map((item) => {
    return item.nome
})

console.log(novoArrayNome)



//b.
const produtoComDesconto = produtos.map((item) => {
    desconto = item.preco * 0,05
    item.preco = item.preco - desconto
    return item
})

console.log(produtoComDesconto)



//c.
const apenasBebidas = produtos.filter((item) => {
    if(item.categoria === "Bebidas"){
        return true
    } else {
        return false
    }
})

console.log(apenasBebidas)



//d.
const contenhaYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")

})

console.log(contenhaYpe)



//e. 
const mensagemProduto = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(mensagemProduto)



