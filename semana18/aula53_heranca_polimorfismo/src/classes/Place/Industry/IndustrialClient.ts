import { InterfaceClient } from "../../../interfaces/interfaceClient";
import {Industry} from "./Industry";

export class IndustrialClient extends Industry implements InterfaceClient {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;

    constructor(private industrialRegistration: string, name: string, registrationNumber: number, consumedEnergy: number, cep: string, machineQuantity: number) {
        super(machineQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industrialRegistration = industrialRegistration;
        this.machineQuantity = machineQuantity;
    }

    public calculateBill(): number {
        const consumo = (this.consumedEnergy * 0.45) + (100 * this.machineQuantity)
        return consumo
    }

    public getIR(): string {
        return this.industrialRegistration;
    }
    
}