import express from 'express';
import { addProductData, getProductData, getProductsByType } from '../controllers/product_ctrl.js';



const router = express.Router();


router.get('/', getProductData);
router.post('/add', addProductData);
router.get('/by-type',getProductsByType);


export default router;