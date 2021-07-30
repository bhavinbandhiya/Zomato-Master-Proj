//Library
import express from "express";
import passport from "passport";

//Databse modal
import { RestaurantModel} from "../../database/allModels";

const Router = express.Router();
/*
Route     /
Des       Get all the restaurant details based in city 
Params    none
Access    Public
Method    GET
*/

Router.get("/", async function (req, res) {
    try {
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });

        return res.json({ restaurants: restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /
Des       Get individual restaurant details based id
Params    id
Access    Public
Method    GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if (!restaurant) return res.status(404).json({ error: "Restaurant Not Found" });

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/*
Route     /serch
Des       Get restaurant details based on serch string
Params    none
Body      serchSring
Access    Public
Method    GET
*/
Router.get("/serch", async (req, res) => {
    try {
        const { serchString } = req.body;

        const restaurants = await RestaurantModel.find({
            name: { $regex: serchString, options: "i" },
        });

        if (!restaurants) return res.status(404).json({ error: `No Restaurants Match with ${serchString}` });

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


export default Router;
