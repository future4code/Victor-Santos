export class Compras {
    private id: number;
    private user_id: number;
    private quantityProduct: number = 1;
    private totalPurchase: number;

    constructor(id: number, user_id: number, quantityProduct: number = 1, totalPurchase: number) {
        this.id = id;
        this.user_id = user_id;
        this.quantityProduct = quantityProduct;
        this.totalPurchase = totalPurchase;
    }
}