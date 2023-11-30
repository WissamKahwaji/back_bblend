import { Product } from "../models/product/product_model.js";




export const getProductData = async (req, res) => {
    try {

        const productData = await Product.find();


        return res.status(200).json(productData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = await Product.findById(id);


        return res.status(200).json(productData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addProductData = async (req, res) => {
    try {


        const {
            title,
            titleAr,
            type,
            desc,
            descAR,
            usage,
            usageAR,
            ing,
            ingAR,
            exp,
            expAR,
            deepDetails,
        } = req.body;

        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const urlImg = imgPath ? 'https://backbblend.siidevelopment.com/' + imgPath.replace(/\\/g, '/') : null;

        const firstimgPath = req.files && req.files['first'] ? req.files['first'][0].path : null;
        const firsturlImg = firstimgPath ? 'https://backbblend.siidevelopment.com/' + firstimgPath.replace(/\\/g, '/') : null;

        const secondimgPath = req.files && req.files['second'] ? req.files['second'][0].path : null;
        const secondurlImg = secondimgPath ? 'https://backbblend.siidevelopment.com/' + secondimgPath.replace(/\\/g, '/') : null;

        const thirdimgPath = req.files && req.files['third'] ? req.files['third'][0].path : null;
        const thirdurlImg = thirdimgPath ? 'https://backbblend.siidevelopment.com/' + thirdimgPath.replace(/\\/g, '/') : null;

        const newProduct = new Product({
            img: urlImg,
            imgs: {
                first: firsturlImg,
                second: secondurlImg,
                third: thirdurlImg
            },
            title,
            titleAr,
            type,
            desc,
            descAR,
            usage,
            usageAR,
            ing,
            ingAR,
            exp,
            expAR,
            deepDetails,
        });


        await newProduct.save();


        return res.status(201).json("Product data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const getProductsByType = async (req, res) => {
    try {
        const { type } = req.query;
        const products = await Product.find({ type: type });

        if (!products || products.length === 0) {
            return res.status(404).json("Products not found for the given type");
        }

        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};



export const editProductData = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            titleAr,
            type,
            desc,
            descAR,
            usage,
            usageAR,
            ing,
            ingAR,
            exp,
            expAR,
            deepDetails,
        } = req.body;

        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const firstimgPath = req.files && req.files['first'] ? req.files['first'][0].path : null;
        const secondimgPath = req.files && req.files['second'] ? req.files['second'][0].path : null;
        const thirdimgPath = req.files && req.files['third'] ? req.files['third'][0].path : null;


        const urlImg = imgPath ? 'https://backbblend.siidevelopment.com/' + imgPath.replace(/\\/g, '/') : null;
        const firsturlImg = firstimgPath ? 'https://backbblend.siidevelopment.com/' + firstimgPath.replace(/\\/g, '/') : null;
        const secondurlImg = secondimgPath ? 'https://backbblend.siidevelopment.com/' + secondimgPath.replace(/\\/g, '/') : null;
        const thirdurlImg = thirdimgPath ? 'https://backbblend.siidevelopment.com/' + thirdimgPath.replace(/\\/g, '/') : null;

        const updatedData = {
            title,
            titleAr,
            type,
            desc,
            descAR,
            usage,
            usageAR,
            ing,
            ingAR,
            exp,
            expAR,
            deepDetails,
        };

        if (imgPath) updatedData.img = urlImg;
        if (firstimgPath) updatedData.imgs.first = firsturlImg;
        if (secondimgPath) updatedData.imgs.second = secondurlImg;
        if (thirdimgPath) updatedData.imgs.third = thirdurlImg;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updatedData },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json("Product not found");
        }

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const deleteProductData = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json("Product not found");
        }

        return res.status(200).json("Product deleted successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};