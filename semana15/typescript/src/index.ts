//Exercício 1

console.log("Hello world!")

//Exercício 1
//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
let minhaString: string = "Hello World!"
// minhaString = 10
// Resposta: o tipo number não pode ser atribuido a variável minhaString pois se trata de uma variável do tipo string.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
//Resposta:
const meuNumero: string | number = 45

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

const person: {nome: string, idade: number, corFavorita: string} = {
    nome: "Victor",
    idade: 27,
    corFavorita: "Azul"
}
console.log(person)

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const victor: pessoa = {
    nome: "Victor",
    idade: 27,
    corFavorita: "Azul"
}

const gabriel: pessoa = {
    nome: "Gabriel Medina",
    idade: 27,
    corFavorita: "Amarelo"
}

const astrodev: pessoa = {
    nome: "Astrodev",
    idade: 30,
    corFavorita: "Cinza"
}