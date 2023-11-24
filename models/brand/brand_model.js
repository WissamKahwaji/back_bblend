import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    brandName: String,
    brandDescription: String
});



export const brandModel = mongoose.model('brand', brandSchema);