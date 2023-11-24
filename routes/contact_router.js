import express from 'express';
import { addContactData, getContactUsData } from '../controllers/contact_ctrl.js';





const router = express.Router();

router.get('/', getContactUsData);
router.post('/add', addContactData);

export default router;