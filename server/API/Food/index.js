import express from "express";
import passport from "passport";

//Databse modal
import { FoodModel } from "../../database/allModels";

/*
Route     /r
Des       Get all food based particular restaurant
Params    id
Access    Public
Method    GET
*/
Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /c
Des       Get all food based particular restaurant
Params    category
Access    Public
Method    GET
*/
Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await FoodModel.find({ category: { $regex: category, $options: "i" } });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const Router = express.Router();