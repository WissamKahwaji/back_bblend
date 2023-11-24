import { contactUsModel } from "../models/contactUs/contact_us_model.js";



export const getContactUsData = async (req, res) => {
    try {

        const contactUsData = await contactUsModel.findOne();


        if (!contactUsData) {
            return res.status(404).json("Contact us data not found");
        }


        return res.status(200).json(contactUsData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};


export const addContactData = async (req, res) => {
    try {

        const { email, callUs, whatsapp, insta } = req.body;
        const imgPath = req.files && req.files['img'] ? req.files['img'][0].path : null;
        const urlImg = imgPath ? 'http://localhost:5000/' + imgPath.replace(/\\/g, '/') : null;

        const newContactData = new contactUsModel({
            img: urlImg,
            email,
            callUs,
            whatsapp,
            insta,
        });


        await newContactData.save();


        return res.status(201).json("Contact data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};