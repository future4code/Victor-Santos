//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------------

/*
1.  Leia o código abaixo

    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])

    a) O que vai ser impresso no console?
//RESPOSTA:
Matheus Nachtergaele
Virginia Cavendish
{Canal: "Globo", horario: "14h"}



2. Leia o código abaixo

    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)

    a) O que vai ser impresso no console?
//REPOSTA:
{nome: Juca, idade: 3, raca: SRD}
{nome: Juba, idade: 3, raca: SRD}
{nome: Jubo, idade: 3, raca: SRD}

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//RESPOSTA:
A sintaxe dos três pontos antes do nome de um objeto ou array chama-se spread/espalhamento e faz uma cópia da estrutura e valores deste objeto onde salvamos em um novo objeto ou array. Feita esta cópia, podemos manipulá-la da maneira que quisermos. (ex: mudar ou adicionar propriedades)



3. Leia o código abaixo

    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))

    a) O que vai ser impresso no console?
//REPOSTA:
false
undefined

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//REPOSTA:
O primeiro console.log retorna false pois imprimimos a função com os dois argumentos sendo o primeiro pessoa e o segundo o valor de backender que é false.
O segundo console.log retorna undefined pois não inicializamos a variável altura, ou seja, não definimos um valor para ela, e quando ocorre isso a variável é automaticamente definida como undefined, portanto, como ela serve de argumento para a função o console.log imprime undefined.
*/

//---------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------
/*1. Resolva os passos a seguir: 

    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }

    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

    - 💡  Dica

        Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

    b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

    - 💡  Dica

        Não lembra da sintaxe de espalhamento ou spread? Não tem problema!

        Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘
*/
//RESPOSTA:
let pessoa = {
    nome: "Amanda",
    apelido: ["Amandinha", "Mandinha", "Mandi"]
}

//a.
let imprimeMensagem = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
}

imprimeMensagem(pessoa)

//b.
let novoApelido = {... pessoa, apelido: ["Man", "Dinha", "Bananinha"]}

imprimeMensagem(novoApelido)

/*2. Resolva os passos a seguir: 

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo

        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }

        minhaFuncao(pessoa)

        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
*/
//RESPOSTA:

//a.
let usuario1 = {
    nome: "Victor",
    idade: 27,
    profissao: "Estudante"
}

let usuario2 = {
    nome: "Amanda",
    idade: 28,
    profissao: "Instrutora"
}
pessoa = (usuario) => {
    let dados = [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]
    return dados
}

console.log(pessoa(usuario1))
console.log(pessoa(usuario2))

/*3. Resolva os passos a seguir: 

    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

    - 💡  Dica

        Aqui você deve usar o método **push()**

    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

    - 💡  Dica

        Deve aparecer algo assim no console do seu navegador:

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png)

        Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)
*/
//RESPOSTA:

//a.
let carrinho = []

//b.
let banana = {
    nome: "Banana",
    disponibilidade: true
}

let maca = {
    nome: "Maça",
    disponibilidade: true
}

let abacaxi = {
    nome: "Abacaxi",
    disponibilidade: true
}

//c.
let fruta = (fruta) => {
    carrinho.push(fruta)
    return carrinho
}

fruta(banana)
fruta(maca)
fruta(abacaxi)

//d.
console.log(carrinho)

