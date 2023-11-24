import mongoose from 'mongoose';
import productSchema from '../product/product_model.js'

const offersSchema = new mongoose.Schema({
    ...productSchema.obj,
    percentage: String,

});


export const offerModel = mongoose.model('offers', offersSchema);