import express from 'express';
import { addCollection, getCollection } from '../controllers/collection_ctrl.js';


const router = express.Router();


router.get('/', getCollection);
router.post('/add', addCollection);


export default router;