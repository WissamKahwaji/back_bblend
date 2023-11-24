import { tipModel } from "../models/tip/tip_model.js";




export const getTipsData = async (req, res) => {
    try {

        const tipData = await tipModel.find();


        return res.status(200).json(tipData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addTipsData = async (req, res) => {
    try {

        const { tipTitle, tipContent } = req.body;


        const newtip = new tipModel({
            tipTitle,
            tipContent,
        });


        await newtip.save();


        return res.status(201).json("Tip data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};