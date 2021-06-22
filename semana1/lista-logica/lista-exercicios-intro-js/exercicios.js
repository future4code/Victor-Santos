// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Qual é a altura do retângulo?"))
  let largura = Number(prompt("Qual é a largura do retângulo?"))
  console.log(altura * largura)
}

console.log(calculaAreaRetangulo())

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))

  console.log(anoAtual - anoNascimento)
}

console.log(imprimeIdade())

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  return peso / (altura * altura)
}

console.log(calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Qual é o seu nome?")
  let idadeUsuario = Number(prompt("Qual sua idade?"))
  let emailUsuario = prompt("Digite seu e-mail:")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corFavorita1 = prompt("Qual é sua cor favorita?") 
  let corFavorita2 = prompt("Qual é sua segunda cor favorita?") 
  let corFavorita3 = prompt("Qual é sua terceira cor favorita?") 

  console.log([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

console.log(retornaStringEmMaiuscula)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

console.log(checaStringsMesmoTamanho)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

console.log(retornaPrimeiroElemento)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

console.log(retornaUltimoElemento)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //return array.push(array.splice(0, 1)[0])
  primeiro = array[0]
  array[0] = array[array.length - 1]
  array[array.length -1] = primeiro

  return array
}

console.log(trocaPrimeiroEUltimo)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  // string1 = string1.toLowerCase()
  // string2 = string2.toLowerCase()
  // comparar = string1 === string2
  // return comparar
  return string1.toLowerCase() === string2.toLowerCase()

}

console.log(checaIgualdadeDesconsiderandoCase)



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  anoAtual = Number(prompt("Em que ano estamos?"))
  anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  anoEmissaoCarteira = Number(prompt("Qual o ano de emissão da sua Carteira de Identidade?"))

  idade = anoAtual - anoNascimento
  tempoCarteira = anoAtual - anoEmissaoCarteira

  menorIgual20 = idade <= 20 && tempoCarteira >= 5
  menorIgual50 = idade <= 50 && tempoCarteira >= 10
  maior50 = idade > 50 && tempoCarteira >= 15

  console.log(menorIgual20 || menorIgual50 || maior50)

}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  anoEhBissexto = ano % 400 == 0
  anoEhBissexto2 = ano % 4 == 0 && ano % 100 != 0  
  return anoEhBissexto || anoEhBissexto2
}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  idade = prompt("Você tem 18 anos ou mais?")
  ensinoMedioCompleto = prompt("Você possui ensino médio completo?")
  disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  idade = idade.toLowerCase() == "sim"
  ensinoMedioCompleto = ensinoMedioCompleto.toLowerCase() == "sim"
  disponibilidade = disponibilidade.toLowerCase() == "sim"

  console.log(idade && ensinoMedioCompleto && disponibilidade)
}