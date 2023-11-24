import mongoose from 'mongoose';



const colorSchema = new mongoose.Schema({
    mainColor: String,
    navLinksColor: String,
});



export const colorModel = mongoose.model('colors', colorSchema);