export interface InterfaceClient {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;

    calculateBill(): number;
}