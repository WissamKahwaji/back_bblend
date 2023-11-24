import mongoose from "mongoose";



const contactUsSchema = new mongoose.Schema({
    img: String,
    email: String,
    callUs: String,
    whatsapp: String,
    insta: String,
});



export const contactUsModel = mongoose.model('contactUs', contactUsSchema);