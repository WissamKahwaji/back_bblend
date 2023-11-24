import express from 'express';
import { addBrandData, getBrandData } from '../controllers/brand_ctrl.js';




const router = express.Router();


router.get('/', getBrandData);
router.post('/add', addBrandData);


export default router;