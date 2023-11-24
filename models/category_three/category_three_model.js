import mongoose from 'mongoose';
import productSchema from '../product/product_model.js';

const categoryThreeSchema = new mongoose.Schema({
    title: String,
    products: [productSchema]
});


export const categoryThreeModel = mongoose.model('categoryThree', categoryThreeSchema);