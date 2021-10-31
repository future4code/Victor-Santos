import { InterfaceClient } from "../../../interfaces/interfaceClient";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements InterfaceClient {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    

    constructor(private cnpj: string, name: string, registrationNumber: number, consumedEnergy: number, floorsQuantity: number, cep: string) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }

    calculateBill(): number {
        const consumo = this.consumedEnergy * 0.53
        return consumo 
    }

    public getCnpj(): string {
        return this.cnpj
    }
}