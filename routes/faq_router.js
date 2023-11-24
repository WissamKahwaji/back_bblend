import express from 'express';
import { addFaqData, getFaqData } from '../controllers/faq_ctrl.js';


const router = express.Router();

router.get('/', getFaqData);
router.post('/add', addFaqData);



export default router;