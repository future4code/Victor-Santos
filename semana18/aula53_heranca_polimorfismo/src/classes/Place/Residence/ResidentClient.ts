import { InterfaceClient } from "../../../interfaces/interfaceClient";
import { Residence } from "./Residence";

export class ResidentClient extends Residence implements InterfaceClient {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;

    constructor(private cpf: string, residentsQuantity: number, cep: string, name: string, registrationNumber: number, consumedEnergy: number) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public calculateBill(): number {
        const consumo: number = this.consumedEnergy *= 0.75
        return consumo;
    }
};
