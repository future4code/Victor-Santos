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
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const victor: pessoa = {
//     nome: "Victor",
//     idade: 27,
//     corFavorita: "Azul"
// }

// const gabriel: pessoa = {
//     nome: "Gabriel Medina",
//     idade: 27,
//     corFavorita: "Amarelo"
// }

// const astrodev: pessoa = {
//     nome: "Astrodev",
//     idade: 30,
//     corFavorita: "Cinza"
// }

//d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.
enum coresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

const victor: pessoa = {
    nome: "Victor",
    idade: 27,
    corFavorita: coresArcoIris.AZUL
}

const gabriel: pessoa = {
    nome: "Gabriel Medina",
    idade: 27,
    corFavorita: coresArcoIris.AMARELO
}

const astrodev: pessoa = {
    nome: "Astrodev",
    idade: 30,
    corFavorita: coresArcoIris.ANIL
}

const pessoas: pessoa[] = [victor, gabriel, astrodev]
console.log("Array de pessoas:", pessoas)

//Exercício 02
/* Observe a função a seguir, escrita em JavaScript:*/
//a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//Resposta: O input de entrada é um array de números. A saíde é um objeto contendo o maior e menor números e a media entre eles.
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): estatisticas {
    const numerosOrdenados = numeros.sort((a, b ) => a - b)
    console.log(numerosOrdenados)
    let soma: number = 0
    for (let num of numeros) {
        soma += num
    }
    const obterEstatisticas: estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return obterEstatisticas
}

console.log(obterEstatisticas(numeros))

//b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
//Resposta: numeros: number[], obterEstatisticas: objeto, soma: number, numerosOrdenados: ordena os numeros do menor para o maior.

//c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
// type amostraIdade = {
//     numeros: number[],
//     obterEstatisticas: (numeros: number[]) => estatisticas
// }

// const amostraDeIdades: amostraIdade = {
//     numeros: numeros,
//     obterEstatisticas: estatisticas
// }


//Exercício 03
//Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto. Observe o seguinte array de posts:
/*
const posts = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]
*/
//a) Copie o código acima para um arquivo .ts. Depois, crie um type para representar um post e utilize-o para fazer a tipagem do array posts.

type postagem = {
    autor: string,
    texto: string,
}

const alvo: postagem ={
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const severo: postagem = {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
}

const hermione: postagem = {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
}

const dobby: postagem = {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
}

const voldemort: postagem = {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
}

const post = [alvo, severo, hermione, dobby, voldemort]
// console.table({post})

//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
//Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.
//Resposta: As entradas são o type postagem e autorInformando sendo uma string. A saída é o type postagem.
function buscarPostsPorAutor(posts: postagem[], autorInformado: string): postagem[] {
    return posts.filter((post) => {
        return post.autor === autorInformado
    })
}
console.log("Exercício 04")
console.log("Post:", buscarPostsPorAutor(post, "Alvo Dumbledore"))

//Exercício 04
//<========== Está na pasta exercicio04



//Exercício 05
//Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior
//Resposta:
const num1: number = 5
const num2: number = 5
function result(num1: number, num2: number): void {
  console.log("Exercício 05: ")
  const soma: number = num1 + num2
  console.log("A soma entre os números é:", soma)
  const subtracao: number = num1 - num2
  console.log("A subtração entre os números é:", subtracao)
  const multiplicacao: number = num1 * num2
  console.log("A multiplicacao entre os numeros é:", multiplicacao)
  const numeros: number[] = [soma, subtracao, multiplicacao]
  const maiorNumero: number = numeros.reduce((a, b) => {
      return Math.max(a, b)
  })
  console.log("O maior número entre eles é:", maiorNumero)
}
result(num1, num2)