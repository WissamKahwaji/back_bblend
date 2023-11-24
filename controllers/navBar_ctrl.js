import { navBarModel } from "../models/navBar/navBar_model.js";

export const getNavBarData = async (req, res) => {
    try {

        const navBarData = await navBarModel.find();


        return res.status(200).json(navBarData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const addNavBarData = async (req, res) => {
    try {

        const { path, title } = req.body;


        const newNavBarData = new navBarModel({
            path,
            title,
        });


        await newNavBarData.save();


        return res.status(201).json("NavBar data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};