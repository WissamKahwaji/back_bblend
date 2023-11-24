import { aboutContent } from "../models/about/about_content_model.js";
import { aboutModel } from "../models/about/about_model.js";



export const getAboutData = async (req, res) => {
    try {
        const aboutData = await aboutModel.findOne().populate('firstBox').populate('secondBox');
        return res.status(200).json(aboutData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
}


export const addAboutData = async (req, res) => {
    try {
        const { intro, firstBox, secondBox } = req.body;


        const firstBoxContent = firstBox ? new aboutContent(firstBox) : null;
        const secondBoxContent = secondBox ? new aboutContent(secondBox) : null;

        if (firstBoxContent) await firstBoxContent.save();
        if (secondBoxContent) await secondBoxContent.save();


        const newAboutData = new aboutModel({
            intro,
            firstBox: firstBoxContent ? firstBoxContent._id : null,
            secondBox: secondBoxContent ? secondBoxContent._id : null,
        });


        await newAboutData.save();


        return res.status(201).json("About data added successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
};
