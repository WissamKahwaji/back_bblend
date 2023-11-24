import express from 'express';
import { addProductData, getProductById, getProductData, getProductsByType } from '../controllers/product_ctrl.js';



const router = express.Router();


router.get('/', getProductData);

router.post('/add', addProductData);
router.get('/by-type', getProductsByType);
router.get('/:id', getProductById);

export default router;