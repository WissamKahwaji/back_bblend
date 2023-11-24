import { whyBbModel } from "../models/why_bb/why_bb_model.js";





export const getWhyBbData = async (req, res) => {
    try {

        const whyBbData = await whyBbModel.find();


        return res.status(200).json(whyBbData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const addWhyBbData = async (req, res) => {
    try {
        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const urlImg = imgPath ? 'https://backbblend.siidevelopment.com/' + imgPath.replace(/\\/g, '/') : null;

        const newWhyBbData = new whyBbModel({
            img: urlImg
        });

        await newWhyBbData.save();
        return res.status(201).json("New data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};