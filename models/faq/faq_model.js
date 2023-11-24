import mongoose from "mongoose";


const faqSchema = new mongoose.Schema({

    faqTitle: String,
    faqContent: String

});



export const faqModel = mongoose.model('faq', faqSchema);