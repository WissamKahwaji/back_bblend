import { offerModel } from "../models/offers/offers_model.js";




export const getOfferData = async (req, res) => {
    try {

        const offerData = await offerModel.find();


        return res.status(200).json(offerData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addOfferData = async (req, res) => {
    try {

        const {
            img,
            imgs,
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
            percentage,
            deepDetails,
        } = req.body;


        const newOffer = new offerModel({
            img,
            imgs,
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
            percentage,
            deepDetails,
        });


        await newOffer.save();


        return res.status(201).json("new Offer added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

