import { collectionModel } from "../models/collection/collection_model.js";


export const getCollection = async (req, res) => {
    try {

        const collection = await collectionModel.find();
        if (!collection) {
            return res.status(404).json("Collection data not found");
        }
        return res.status(200).json(collection);

    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};



export const addCollection = async (req, res) => {
    try {
        const { description } = req.body;
        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const urlImg = imgPath ? 'https://backbblend.siidevelopment.com/' + imgPath.replace(/\\/g, '/') : null;

        const newCollectionData = new collectionModel({
            img: urlImg,
            description: description
        });

        await newCollectionData.save();

        return res.status(201).json("Collection data added successfully");

    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};