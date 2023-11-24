import { footerModel } from "../models/footer/footer_model.js";


export const getFooterData = async (req, res) => {
    try {

        const footerData = await footerModel.findOne();

        return res.status(200).json(footerData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addFooterData = async (req, res) => {
    try {

        const { first, second, third } = req.body;


        const existingFooterData = await footerModel.findOne();
        if (existingFooterData) {
            existingFooterData.first = first;
            existingFooterData.second = second;
            existingFooterData.third = third;
            await existingFooterData.save();
        } else {

            const newFooterData = new footerModel({
                first,
                second,
                third,
            });


            await newFooterData.save();
        }


        return res.status(201).json("Footer data added/updated successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};