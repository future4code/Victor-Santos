import { Transaction } from "./transaction";

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

// export class Transaction {
//     private description: string;
//     private value: number;
//     private date: string

//     public getDescription(){
//         return this.description;
//     }

//     public getValue(){
//         return this.value;
//     }

//     public getDate(){
//         return this.date;
//     }

//     constructor(description: string, value: number, date: string){
//         this.description = description;
//         this.value = value;
//         this.date = date;
//     }
// }