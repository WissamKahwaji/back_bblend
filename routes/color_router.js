import express from 'express';
import { addColor, getColorData } from '../controllers/color_ctrl.js';



const router = express.Router();

router.get('/', getColorData);
router.post('/add', addColor);

export default router;