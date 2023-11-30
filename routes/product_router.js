import express from 'express';
import { addProductData, deleteProductData, editProductData, getProductById, getProductData, getProductsByType } from '../controllers/product_ctrl.js';



const router = express.Router();


router.get('/', getProductData);

router.post('/add', addProductData);
router.get('/by-type', getProductsByType);
router.get('/:id', getProductById);
router.put('/:id', editProductData);
router.delete('/:id', deleteProductData);
export default router;