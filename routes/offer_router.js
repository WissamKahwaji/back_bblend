import express from 'express';
import { addOfferData, getOfferData } from '../controllers/offer_ctrl.js';




const router = express.Router();


router.get('/', getOfferData);
router.post('/add', addOfferData);



export default router;