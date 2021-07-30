import express from "express";
import passport from "passport";

//Databse modal
import {FoodModel } from "../../database/allModels";

/*
Route     /
Des       Get all the restaurant details based in city 
Params    none
Access    Public
Method    GET
*/

const Router = express.Router();