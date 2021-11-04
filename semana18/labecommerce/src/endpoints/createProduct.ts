import {Request, Response} from "express";
import { Product } from "../classes/Product";
import { ProductDatabase } from "../database/ProductDatabase";
import { ProductDb } from "../types";

export async function createProduct(req: Request, res: Response): Promise<void> {
    try {
        const {name, description, price} = req.body
        const id = `${Date.now()}`

        if (!name || !description || !price) {
            res.statusCode = 401
            throw new Error("Favor informar todos os campos")
        }

        const product = new Product(id, name, description, price);

        const productDatabase: ProductDatabase = new ProductDatabase();
        await productDatabase.createProduct(product);

        res.status(201).send("Created user");

    } catch (error: any) {
        res.status(res.statusCode || 400).send(error.message || error.sqlMessage);
    }
}
