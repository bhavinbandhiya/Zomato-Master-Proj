//Importing Env Variable
require("dotenv").config();

//Library
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Microservices Routes
import Auth from "./API/Auth";

//Database Connection
import ConnectDB from "./database/connection"

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//Application Route
zomato.use("/auth",Auth);


zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(3001, () =>
    ConnectDB()
        .then(() => console.log("Server is running "))
        .catch(() => console.log("Server is running but database connection failed"))
);
