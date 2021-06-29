/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(alert(`♣ ♥ ♠ ♦ "BEM VINDO AO BLACKJACK!" ♣ ♥ ♠ ♦`))

console.log('♣ ♥ ♠ ♦ "BEM VINDO AO BLACKJACK" ♣ ♥ ♠ ♦')

const nomeUsuario = prompt("DIGITE SEU NOME:")

const perguntarSeQuerJogar = confirm(`GOSTARIA DE INICIAR UMA NOVA RODADA?`)




if(perguntarSeQuerJogar === false) {
   console.log("O JOGO ACABOU :(")
} else if (perguntarSeQuerJogar === true) {
   console.log("NOVA RODADA")
   const carta = comprarCarta()
   
   //Cartas do Usuário
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let valorTotalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   
   console.log("Suas cartas são:", primeiraCartaUsuario.texto, "e", segundaCartaUsuario.texto, "- pontuação:", valorTotalUsuario)

   //Cartas do Computador
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaComputador = comprarCarta()
   let valorTotalComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
   
   console.log("As cartas do computador são:", primeiraCartaComputador.texto, "e", segundaCartaComputador.texto, "- pontuação:", valorTotalComputador)


   //Finalizando o jogo
   if(valorTotalUsuario > valorTotalComputador){
      console.log(`"VOCÊ VENCEU!"`);

   } else if(valorTotalUsuario < valorTotalComputador){
      console.log(`"VOCÊ PERDEU!"`);

   } else {
      console.log("Empatou!")
      
   }

}







