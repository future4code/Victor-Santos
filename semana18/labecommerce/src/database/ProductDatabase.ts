import {BaseDatabase} from "./BaseDatabase";
import { Product } from "../classes/Product";

export class ProductDatabase extends BaseDatabase {
    async createProduct(product: Product) {
        await BaseDatabase.connection("products")
        .insert(product);
    };

    async getAllProducts() {
       return await BaseDatabase.connection("products");
    };
};