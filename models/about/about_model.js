import mongoose from "mongoose";



const aboutSchema = new mongoose.Schema({
    intro: String,
    firstBox: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aboutContent',
    },
    secondBox: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aboutContent',
    },
});




export const aboutModel = mongoose.model('About', aboutSchema);