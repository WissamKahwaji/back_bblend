import mongoose from 'mongoose';



const collectionSchema = new mongoose.Schema({
    img: String,
    description: String,
});



export const collectionModel = mongoose.model('collection', collectionSchema);