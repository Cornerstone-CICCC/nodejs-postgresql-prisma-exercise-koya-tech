import { Request, Response } from 'express';
import * as productModel from '../models/product.model';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const product = await productModel.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const { productName, price } = req.body;
    try {
        const newProduct = await productModel.createProduct({ productName, price });
        res.status(201).json(newProduct);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { productName, price } = req.body;
    try {
        const updatedProduct = await productModel.updateProduct(id, { productName, price });
        res.json(updatedProduct);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const deletedProduct = await productModel.deleteProduct(id);
        res.json(deletedProduct);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};