import { middleSectionModel } from "../models/middle_section/middle_section_model.js";


export const getMiddleSection = async (req, res) => {
    try {
        const middleData = await middleSectionModel.findOne();


        if (!middleData) {
            return res.status(404).json("middleData data not found");
        }


        return res.status(200).json(middleData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const addMiddleData = async (req, res) => {
    try {
        const { title, description } = req.body;
        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const urlImg = imgPath ? 'http://localhost:5000/' + imgPath.replace(/\\/g, '/') : null;

        const newMiddle = new middleSectionModel({
            img: urlImg,
            title: title,
            description: description,
        });

        await newMiddle.save();
        return res.status(201).json("middle data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};