import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';


import aboutRoutes from './routes/about_router.js';
import contactRoutes from './routes/contact_router.js';
import faqRoutes from './routes/faq_router.js';
import tipsRoutes from './routes/tip_router.js';
import whyBbRoutes from './routes/whyBb_router.js';
import productRoutes from './routes/product_router.js';
import offersRoutes from './routes/offer_router.js';
import collectionRoutes from './routes/collection_router.js';
import middleRoutes from './routes/middle_section_router.js';
import colorsRoutes from './routes/color_router.js';
import navBarRoutes from './routes/navBar_router.js';
import brandRoutes from './routes/brand_router.js';
import footerRoutes from './routes/footer_router.js';
import logoRoutes from './routes/logo_router.js';
import orderRoutes from './routes/order_router.js';
import categoryThreeRoutes from './routes/category_three_router.js';

const app = express();
dotenv.config();



const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'video/mp4' ||
        file.mimetype === 'image/gif'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
    { name: 'img', maxCount: 1 },
    { name: 'first', maxCount: 1 },
    { name: 'second', maxCount: 1 },
    { name: 'third', maxCount: 1 },
    { name: 'logoImg', maxCount: 1 },
    { name: 'mainImg', maxCount: 1 },

    { name: 'imgs', maxCount: 5 },

]));


app.use('/aboutContent', aboutRoutes);
app.use('/contactUs', contactRoutes);
app.use('/faq', faqRoutes);
app.use('/Tips', tipsRoutes);
app.use('/extraPageThreeContent', whyBbRoutes);
app.use('/products', productRoutes);
app.use('/offers', offersRoutes);
app.use('/collections', collectionRoutes);
app.use('/middle', middleRoutes);
app.use('/colors', colorsRoutes);
app.use('/lastThreeNavLinks', navBarRoutes);
app.use('/branding', brandRoutes);
app.use('/footer', footerRoutes);
app.use('/logo', logoRoutes);
app.use('/orders', orderRoutes);
app.use('/CategoryThree', categoryThreeRoutes);


const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})).catch((error) => console.log(error.message));

mongoose.set('strictQuery', true);