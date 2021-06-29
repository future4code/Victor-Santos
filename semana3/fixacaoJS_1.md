function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salarioVendedor = 2000
 let comissao = 100 * qtdeCarrosVendidos + valorTotalVendas * 0.05
 
 let salarioFinal = salarioVendedor + comissao
 return salarioFinal

}