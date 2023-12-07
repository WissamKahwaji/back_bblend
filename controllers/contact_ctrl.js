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
    const imgPath =
      req.files && req.files["img"] ? req.files["img"][0].path : null;
    const urlImg = imgPath
      ? "https://backbblend.siidevelopment.com/" + imgPath.replace(/\\/g, "/")
      : null;

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

export const editContactData = async (req, res) => {
  try {
    const { email, callUs, whatsapp, insta } = req.body;
    const imgPath =
      req.files && req.files["img"] ? req.files["img"][0].path : null;

    const existingContactData = await contactUsModel.findOne();
    const urlImg = imgPath
      ? "https://backbblend.siidevelopment.com/" + imgPath.replace(/\\/g, "/")
      : existingContactData.img;
    if (!existingContactData) {
      return res.status(404).json("Contact data not found");
    }

    existingContactData.img = urlImg || existingContactData.img;
    existingContactData.email = email || existingContactData.email;
    existingContactData.callUs = callUs || existingContactData.callUs;
    existingContactData.whatsapp = whatsapp || existingContactData.whatsapp;
    existingContactData.insta = insta || existingContactData.insta;

    await existingContactData.save();

    return res.status(200).json("Contact data updated successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};
