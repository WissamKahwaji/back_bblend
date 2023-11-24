import mongoose from 'mongoose';


const navBarSchema = new mongoose.Schema({
    path: String,
    title: String,
});



export const navBarModel = mongoose.model('navBar', navBarSchema);