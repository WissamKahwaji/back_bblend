import express from 'express';
import { addCategoryThreeData, getCategoryThreeData } from '../controllers/category_three_ctrl.js';




const router = express.Router();

router.get('/', getCategoryThreeData);
router.post('/', addCategoryThreeData);




export default router;