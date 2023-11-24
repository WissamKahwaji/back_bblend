import { colorModel } from "../models/colors/color_model.js";


export const getColorData = async (req, res) => {
    try {
        const colorData = await colorModel.findOne();
        if (!colorData) {
            return res.status(404).json("Color data not found");
        }


        return res.status(200).json(colorData);

    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const addColor = async (req, res) => {
    try {
        const { mainColor, navLinksColor } = req.body;

        const newColor = new colorModel({
            mainColor,
            navLinksColor,
        });

        await newColor.save();

        return res.status(201).json("Color data added successfully");

    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};
