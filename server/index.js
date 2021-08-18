//Importing Env Variable
require("dotenv").config();

//Library
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";

//Microservices Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";


//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuratio
googleAuthConfig(passport);

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image",Image);



zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is running "))
        .catch(() => console.log("Server is running but database connection failed"))
);
