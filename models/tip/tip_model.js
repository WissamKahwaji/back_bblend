import mongoose from "mongoose";


const tipSchema = new mongoose.Schema({

    tipTitle: String,
    tipContent: String

});



export const tipModel = mongoose.model('tip', tipSchema);