import express from "express";
import passport from "passport";

//Databse modal
import { MenuModel } from "../../database/allModels";

/*
Route     /list
Des       Get all food based on id
Params    _id
Access    Public
Method    GET
*/
Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /list
Des       Get all food based on id
Params    _id
Access    Public
Method    GET
*/
Router.get("/images/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


const Router = express.Router();