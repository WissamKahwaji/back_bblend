import mongoose from 'mongoose';


const footerSchema = new mongoose.Schema({
    first: String,
    second: String,
    third: String
});



export const footerModel = mongoose.model('footer', footerSchema);