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

export const getOfferByIdData = async (req, res) => {
  try {
    const { id } = req.params;
    const offerData = await offerModel.findById(id);

    return res.status(200).json(offerData);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const addOfferData = async (req, res) => {
  try {
    const {
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

    const imgPath =
      req.files && req.files["img"] ? req.files["img"][0].path : null;
    const urlImg = imgPath
      ? "https://backbblend.siidevelopment.com/" + imgPath.replace(/\\/g, "/")
      : null;

    const firstimgPath =
      req.files && req.files["first"] ? req.files["first"][0].path : null;
    const firsturlImg = firstimgPath
      ? "https://backbblend.siidevelopment.com/" +
        firstimgPath.replace(/\\/g, "/")
      : null;

    const secondimgPath =
      req.files && req.files["second"] ? req.files["second"][0].path : null;
    const secondurlImg = secondimgPath
      ? "https://backbblend.siidevelopment.com/" +
        secondimgPath.replace(/\\/g, "/")
      : null;

    const thirdimgPath =
      req.files && req.files["third"] ? req.files["third"][0].path : null;
    const thirdurlImg = thirdimgPath
      ? "https://backbblend.siidevelopment.com/" +
        thirdimgPath.replace(/\\/g, "/")
      : null;

    const newOffer = new offerModel({
      img: urlImg,
      imgs: {
        first: firsturlImg,
        second: secondurlImg,
        third: thirdurlImg,
      },
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

export const editOfferData = async (req, res) => {
  try {
    const { id } = req.params;

    const {
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

    const imgPath =
      req.files && req.files["img"] ? req.files["img"][0].path : null;
    const firstimgPath =
      req.files && req.files["first"] ? req.files["first"][0].path : null;
    const secondimgPath =
      req.files && req.files["second"] ? req.files["second"][0].path : null;
    const thirdimgPath =
      req.files && req.files["third"] ? req.files["third"][0].path : null;

    const urlImg = imgPath
      ? "https://backbblend.siidevelopment.com/" + imgPath.replace(/\\/g, "/")
      : null;
    const firsturlImg = firstimgPath
      ? "https://backbblend.siidevelopment.com/" +
        firstimgPath.replace(/\\/g, "/")
      : null;
    const secondurlImg = secondimgPath
      ? "https://backbblend.siidevelopment.com/" +
        secondimgPath.replace(/\\/g, "/")
      : null;
    const thirdurlImg = thirdimgPath
      ? "https://backbblend.siidevelopment.com/" +
        thirdimgPath.replace(/\\/g, "/")
      : null;

    const updatedData = {
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
    };

    if (imgPath) updatedData.img = urlImg;
    if (firstimgPath) updatedData.imgs.first = firsturlImg;
    if (secondimgPath) updatedData.imgs.second = secondurlImg;
    if (thirdimgPath) updatedData.imgs.third = thirdurlImg;

    const updatedOffer = await offerModel.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    if (!updatedOffer) {
      return res.status(404).json("Offer not found");
    }

    return res.status(200).json(updatedOffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOffer = await offerModel.findByIdAndDelete(id);

    if (!deletedOffer) {
      return res.status(404).json("Offer not found");
    }

    return res.status(200).json("Offer deleted successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};
