import { brandModel } from "../models/brand/brand_model.js";

export const getBrandData = async (req, res) => {
  try {
    const brandData = await brandModel.findOne();

    return res.status(200).json(brandData);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const addBrandData = async (req, res) => {
  try {
    const { brandName, brandDescription } = req.body;

    const newBrandData = new brandModel({
      brandName,
      brandDescription,
    });

    await newBrandData.save();

    return res.status(201).json("Brand data added successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};
