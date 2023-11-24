import express from 'express';
import { addTipsData, getTipsData } from '../controllers/tip_ctrl.js';






const router = express.Router();

router.get('/', getTipsData);
router.post('/add', addTipsData);
export default router;