import express from 'express';
import { addFooterData, getFooterData } from '../controllers/footer_ctrl.js';


const router = express.Router();


router.get('/', getFooterData);
router.post('/', addFooterData)




export default router;