import express from 'express';
import { addMiddleData, getMiddleSection } from '../controllers/middle_section_ctrl.js';





const router = express.Router();


router.get('/', getMiddleSection);
router.post('/add', addMiddleData);



export default router;