import { faqModel } from "../models/faq/faq_model.js";



export const getFaqData = async (req, res) => {
    try {

        const faqData = await faqModel.find();


        return res.status(200).json(faqData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};

export const addFaqData = async (req, res) => {
    try {

        const { faqTitle, faqContent } = req.body;


        const newFaq = new faqModel({
            faqTitle,
            faqContent,
        });


        await newFaq.save();


        return res.status(201).json("FAQ data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};