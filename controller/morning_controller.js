import { morningModel } from "../models/morning.js";

export const getMorning = async (req, res, next) => {
    try {

        const allTask = await morningModel.find();
        res.json(allTask);
        
    } catch (error) {
        next(error)
        
    }
}

export const postMorning = async (req, res, next) => {
    try {
        const addMorning = await morningModel.create(req.body);
        res.json(postMorning);
    } catch (error) {
        next(error)
    }
}

export const deleteMorning = async (req, res, next) => {
    try {
        const easeMorning = await morningModel.findByIdAndDelete(req.params.id);
        res.json(deleteMorning);

    } catch (error) {
        next (error)
        
    }
}