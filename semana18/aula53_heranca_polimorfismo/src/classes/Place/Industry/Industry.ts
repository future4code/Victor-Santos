import { Place } from "../Place";

export class Industry extends Place {
    constructor(protected machineQuantity: number, cep: string) {
        super(cep);
    };

    public getMachineQuantity(): number {
        return this.machineQuantity;
    }
};