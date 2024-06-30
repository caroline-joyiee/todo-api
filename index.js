import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/route.js";


//create an app
const app = express();


//middleware
app.use(express.json());

//use routes
app.use(todoRouter);

//create listen port 
// const port = process.env.PORT || 3000,
app.listen( 3000, () => {
    //add template literallys here*
    console.log('App listening on 300 channel');
})