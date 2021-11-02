import {Request, Response} from "express";
import { Product } from "../classes/Product";
import { ProductDatabase } from "../database/ProductDatabase";
import { ProductDb } from "../types";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {

        // const result: UserDb = await connection("users")
        
        // res.status(200).send(result);

        const productsDatabase = new ProductDatabase();
        const productDb = await productsDatabase.getAllProducts();

        const products = productDb.map(product => {
            return new Product(
                product.id,
                product.name,
                product.description,
                product.price
            )
        })

        res.send(products);

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}