import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const router = Router();

// Route for fetching all products
router.get('/products', productController.getProducts);
// Route for fetching a product by id
router.get('/products/:id', productController.getProduct);
// Route for creating a new product
router.post('/products', productController.createProduct);
// Route for updating a product by id
router.put('/products/:id', productController.updateProduct);
// Route for deleting a product by id
router.delete('/products/:id', productController.deleteProduct);

export default router;