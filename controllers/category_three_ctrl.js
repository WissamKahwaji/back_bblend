import { categoryThreeModel } from "../models/category_three/category_three_model.js";


export const getCategoryThreeData = async (req, res) => {
    try {

        const categoryThreeData = await categoryThreeModel.findOne();


        return res.status(200).json(categoryThreeData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addCategoryThreeData = async (req, res) => {
    try {
        const { title, products } = req.body;

        const newCategoryThreeData = new categoryThreeModel({
            title,
            products,
        });

        await newCategoryThreeData.save();

        return res.status(201).json("Category Three data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};