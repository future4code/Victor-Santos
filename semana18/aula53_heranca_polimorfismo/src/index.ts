//HERANÇA

//Exercício 01

//Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário.
console.log("--------------------Exercício 01--------------------------")
import { User } from "./classes/User";
const victor: User = new User("1", "Victor", "victor@gmail.com", "123456");
console.log(victor)
console.log("Id:", victor.getId);
console.log("Name:", victor.getName);
console.log("Email:", victor.getEmail);

//a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
//Resposta: Não é possível imprimir o password atrelada a essa instância, pois password é um atibuto privado e para que seja lido é necessário criar um getter.

//b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//Resposta: O construtor da classe user foi chamado uma vez ao imprimir a instancia victor da classe user. Caso houvesse mais instâncias ele seria chamado mais vezes.



//Exercício 02

// Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.
console.log(" ")
console.log("-----------------------Exercício 02-----------------------")
import {Customer} from "./classes/Customer";
const customerVictor: Customer = new Customer(victor.getId(), victor.getName(), victor.getEmail(), "123456", "4563-8756-9123-4277",);
console.log(customerVictor);
console.log(customerVictor.getCreditCard());
console.log(customerVictor.purchaseTotal);

// a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
//Resposta: A frase foi impressa uma vez no terminal, ou seja, foi inicializada uma vez.

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
//Resposta: A frase foi impressa uma vez no terminal, pois toda vez que imprimimos os dados completos de uma instância de uma classe filha, é impresso também as informações da classe pai.



//Exercício 03

// Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).
console.log(" ")
console.log("-----------------------Exercício 03-----------------------");
console.log("Id:", customerVictor.getId());
console.log("Name:", customerVictor.getName());
console.log("Email:", customerVictor.getEmail());
console.log("Credit Card:", customerVictor.getCreditCard());
console.log("Purchase Total:", customerVictor.purchaseTotal);
//console.log(customerVictor.password) //A propriedade 'password' é particular e somente é acessível na classe 'User'.

// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//Resposta: Não é possível imprimir o atributo password atrelada a essa instância, por ser private ela só pode ser acessada na classe User.



//Exercício 04

// Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método
console.log(" ");
console.log("---------------Exercício 04-----------------");
console.log(customerVictor.introduceYourself());


//POLIMORFISMO
console.log(" ");
console.log(" ");
console.log("POLIMORFISMO")
//Exercício 01

// Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.
// export {interfaceClient} from "./interfaces/interfaceClient";
console.log("-------------------Exercício 01----------------------------")
import { InterfaceClient } from "./interfaces/interfaceClient";

const clientVictor: InterfaceClient = {
    name: "Victor",
    registrationNumber: 1,
    consumedEnergy: 10,

    calculateBill: () => {
        return 2
    }
}

// a. *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
console.log("Client Name:", clientVictor.name);
console.log("Client Id:", clientVictor.registrationNumber)
console.log("Client Consumed:", clientVictor.consumedEnergy);
console.log("Client Bill:", clientVictor.calculateBill());
//Resposta: Foi possível imprimir todas as propriedades, inclusive a calculate bill.


//Exercício 02
//Agora, vamos ver a classe Place.

// Essa classe é abstrata porque está representando um tipo de informação que simplesmente **abstrai** e **armazena** as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

// a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// import { Commerce, Industry, Place, Residence } from "./classes/Place/Place";
// const newPlace: Place = new Place {

// }
// Não é possível criar uma instância de uma classe abstrata


// b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
//Resposta: Usá-la como modelo para criação de um novo objeto. Poderiamos criar uma classe extends dessa classe abstrata e depois instânciar através dessa classe nova. Poderiamos remover o abstract.



//Exercício 03
// Esse exercício vai responder melhor a essas três perguntas: 

// 1. *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
// 2. *Por que a `Place` não é uma interface?*
// 3. *Por que a classe `Place` é uma Classe Abstrata?*

// Será um pouco mais longo, mas esperamos que seja esclarecedor.

// Vamos começar lendo três classes. 

// A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores (`residentsQuantity`)

//Agora, crie uma instância de cada uma das classes novas. Imprima no console o CEP de cada uma delas, através do método getCep herdado da classe Place. Devido à propriedade do Polimorfismo, uma classe filha de uma classe pai é também do mesmo tipo da pai. Ou seja, a Residence, a Commerce e a Industry são do tipo Place. Dessa forma, uma instância da Residence também é uma instância da classe Place. Uma instância da Commerce também é da classe Place (o mesmo se aplica para a Industry). Isso responde à primeira pergunta: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.
console.log(" ");
console.log("---------------------Exercício 03---------------------");
import {Place} from "./classes/Place/Place";
import { Residence } from "./classes/Place/Residence/Residence";
import {Commerce} from "./classes/Place/Commerce/Commerce";
import {Industry} from "./classes/Place/Industry/Industry"
const newResidence: Residence = new Residence(5, "06060-220");
const newCommerce: Commerce = new Commerce(2, "05326-020");
const newIndustry: Industry = new Industry(20, "09563-560");
console.log("Residence Cep:", newResidence.getCep());
console.log("Commerce Cep:", newCommerce.getCep());
console.log("Industry Cep:", newIndustry.getCep());



//Exercício 04
console.log(" ");
console.log("-----------------------EXERCÍCIO 04-------------------------");

// Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.

// Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**
import { ResidentClient } from "./classes/Place/Residence/ResidentClient";
const newResidentClient: ResidentClient = new ResidentClient("563-659-782-10", 5, "06060-220", "Victor", 1, 10);
console.log("Resident Client:", newResidentClient);
console.log("Total Bill: R$", newResidentClient.calculateBill());

//a. *Que métodos e propriedades essa classe possui? Por quê?*
//Resposta: A classe ResidentClient possui os métodos getCpf() e calculateBill(), além das propriedades cep, residentsQuantity, cpf, name, registratuionNumber e consumedEnergy.



//Exercício 05
console.log(" ");
console.log("-----------------------EXERCÍCIO 05-----------------------------");

// Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.
// Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**
import { CommercialClient } from "./classes/Place/Commerce/CommercialClient";
const newCommercialClient: CommercialClient = new CommercialClient("70.563.456/0001-75", "Comercio de Donnuts", 1, 200, 3, "08631-652");
console.log("Commecial Client 1:", newCommercialClient);
console.log("CNPJ:", newCommercialClient.getCnpj());
console.log("Commercial Client Bill: R$", newCommercialClient.calculateBill());

// a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*
//Reposta: São quase identicas, possuem todos os atributos e método da interface InterfaceClient (name, registrationNumber, consumedEnergy e calculateBill()), além do atributo e método (cep e getCep()) da classe abstrata Place. 

// b. *Quais as diferenças dessa classe com a `ResidentialClient`?*
//Reposta: A CommercialClient contém o atributo cnpj ao invés de cpf, contém o atributo floorsQuantity em relação ao residentsQuantity e o método calculateBill() faz o calculo da conta utilizando o atributo consumedEnergy vezes R$ 0.53, por conta dos 30% de desconto em relação ao valor cheio de R$ 0,75 calculado no ResidentialClient.



//Exercício 05
console.log(" ");
console.log("--------------------------EXERCÍCIO 06--------------------------");

// Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.
import {IndustrialClient} from "./classes/Place/Industry/IndustrialClient";
const newIndustrialClient: IndustrialClient = new IndustrialClient("0356842", "Industria de Carros", 1, 800, "03182-653", 10);
console.log("Industrial Client:", newIndustrialClient);
console.log("Industrial Registration:", newIndustrialClient.getIR());
console.log("Total Bill: R$", newIndustrialClient.calculateBill());

// a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
// Resposta: A IndustrialClient deve ser filha da classe Industry, pois a classe Industry é a que tem relação com a criação de uma nova classe para clientes industriais.

// b. *Que interface a `IndustrialClient` implementa? Por quê?*
//Reposta: A IndustrialClient implementa a interface IntarfaceClient, pois é a  interface que contém os dados específicos para criação de classes relacionadas ao cadastro de clientes para calculo das contas de luz (calculateBill()).

// c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
//Resposta: Porque os dados necessários para criação de clientes já é passado no momento de cadastrar um novo cliente, portanto, precisamos apenas dos métodos getters para ter acesso as informações relacionadas ao cliente, já que os setters são utilizados para alteração de atributos e métodos. Além disso, o calculateBill() dessa classe deve ser feito em relaçãoa ao consumedEnergy vezes o valor de R$ 0,45 onde é calculado o desconto de 40% em relação ao valor cheio de R$ 0,75, além do acrescimo de R$ 100 vezes o número de machinesQuantity.


