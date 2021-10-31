import { User } from "./User";

export class Customer extends User {
    private creditCard: string;
    public purchaseTotal: number = 0;

    constructor(id: string, name: string, email: string, password: string, creditCard: string) {
        super(id, name, email, password);
        console.log("Chamando o construtor da classe Customer!")
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}