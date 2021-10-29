import {UserAccount} from "../src/user"
import { Transaction } from "./transaction";
import { Bank } from "./bank";

//EXERCÍCIO 01
// Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
/*
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
*/

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//RESPOSTA:
//O constructor é uma função que serve inicializar ações ao criar uma instância da classe. Ele pode receber parâmetros como nome, idade ou peso, que serão usados para criação de uma nova instância da classe.


// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
//RESPOSTA:
console.log("EXERCÍCIO 01");
const victor: UserAccount = new UserAccount("569.456.863-54", "Victor", 28 );
console.log(victor);
//A mensagem "Chamando o construtor da classe User" foi impressa apenas uma vez, pois o método constructor foi inicializado apenas uma vez.


// c) Como conseguimos ter acesso às propriedades privadas de uma classe?
//Resposta:
//Temos acesso às propriedades privadas de uma classe através dos métodos getters para pegar algum atributo e setters para definir ou alterar algum atributo.



//EXERCÍCIO 02
//Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas elas devem ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount
/*
type Transaction = {
  description: string,
  value: number,
  date: string
}
*/
//Resposta:
/*
export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getCpf() {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setTransaction(transaction: Transaction): void {
        this.transactions.push(transaction)
    }

    public getBalance() {
        return this.balance;
    }

    public getTransactions() {
        return this.transactions;
    }

    constructor(cpf: string, name: string, age: number){
        console.log("Chamando o constructor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }  
}

export class Transaction {
    private description: string;
    private value: number;
    private date: string

    public getDescription(){
        return this.description;
    }

    public getValue(){
        return this.value;
    }

    public getDate(){
        return this.date;
    }

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date;
    }
}
*/
console.log("EXERCÍCIO 02")
const novaTransacao: Transaction = new Transaction("Primeira Transação", 5000, "2021-10-29")
console.log(novaTransacao);

victor.setTransaction(novaTransacao)
console.log(victor)


//EXERCÍCIO 03
//Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).
console.log("EXERCÍCIO 03")
const bradesco: Bank = new Bank(victor);
console.log("Bradesco:", bradesco);
console.log("Contas Bradesco:", bradesco.getAccounts());











