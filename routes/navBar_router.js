import express from 'express';
import { addNavBarData, getNavBarData } from '../controllers/navBar_ctrl.js';






const router = express.Router();


router.get('/', getNavBarData);
router.post('/add', addNavBarData);


export default router;