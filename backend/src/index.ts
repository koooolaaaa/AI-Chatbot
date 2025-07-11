import express from "express";
import { config } from "dotenv";
config();
const app = express(); 

// middlewares
app.use(express.json());

//connections and listeners
app.listen(5050, () => console.log("Server Open"));






