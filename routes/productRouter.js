import { Router } from 'express';
import { createProduct, getAllProducts, getProduct } from '../controllers/productController.js';

const router = Router();

router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);

export default router;
