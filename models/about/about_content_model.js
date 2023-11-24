import mongoose from "mongoose";



const aboutContentSchema = new mongoose.Schema({
    img: String,
    title: String,
    text: String,
});


export const aboutContent = mongoose.model('aboutContent', aboutContentSchema);