import mongoose from 'mongoose';


const middleSectionSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String
});



export const middleSectionModel = mongoose.model('middleSection', middleSectionSchema);