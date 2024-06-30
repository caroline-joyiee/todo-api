import { Schema, model, Types } from "mongoose";


//create a Schema
const morningSchema = new Schema({
    timePeriod: {type: String, unique: true, require: true},
    firstHourtask: {type: String, required: true},
    midMorningtask: {type: String, require: true},
    healthFood: {type: String, require:true}


}, {
    timestamps: true
    

});

export const morningModel = model('morning', morningSchema);