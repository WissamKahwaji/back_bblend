import mongoose from 'mongoose';



const whyBbSchema = new mongoose.Schema({
    img: String,
});

export const whyBbModel = mongoose.model('whyBb', whyBbSchema);