import mongoose from "mongoose";

// Define the schema for deep details
const deepDetailsSchema = new mongoose.Schema({
    size: String,
    price: String,
    weight: String,
});

// Define the main schema
const productSchema = new mongoose.Schema({
    img: String,
    imgs: {
        first: String,
        second: String,
        third: String,
    },
    title: String,
    titleAr: String,
    type: String,
    desc: String,
    descAR: String,
    usage: String,
    usageAR: String,
    ing: String,
    ingAR: String,
    exp: String,
    expAR: String,
    deepDetails: {
        first: deepDetailsSchema,
        second: deepDetailsSchema,
        third: deepDetailsSchema,
    },
});

// Create the Mongoose model
export const Product = mongoose.model("Product", productSchema);
export default productSchema;