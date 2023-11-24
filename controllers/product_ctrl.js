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
        const urlImg = imgPath ? 'http://localhost:5000/' + imgPath.replace(/\\/g, '/') : null;

        const firstimgPath = req.files && req.files['first'] ? req.files['first'][0].path : null;
        const firsturlImg = firstimgPath ? 'http://localhost:5000/' + firstimgPath.replace(/\\/g, '/') : null;

        const secondimgPath = req.files && req.files['second'] ? req.files['second'][0].path : null;
        const secondurlImg = secondimgPath ? 'http://localhost:5000/' + secondimgPath.replace(/\\/g, '/') : null;

        const thirdimgPath = req.files && req.files['third'] ? req.files['third'][0].path : null;
        const thirdurlImg = thirdimgPath ? 'http://localhost:5000/' + thirdimgPath.replace(/\\/g, '/') : null;

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
