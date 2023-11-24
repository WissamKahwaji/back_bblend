import express from 'express';
import { addAboutData, getAboutData } from '../controllers/about_ctrl.js';




const router = express.Router();


router.get('/', getAboutData);
router.post('/add', addAboutData);



export default router;