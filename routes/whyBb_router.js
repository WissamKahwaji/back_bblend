import express from 'express';
import { addWhyBbData, getWhyBbData } from '../controllers/why_bb_ctrl.js';







const router = express.Router();


router.get('/', getWhyBbData);
router.post('/add', addWhyBbData);

export default router;