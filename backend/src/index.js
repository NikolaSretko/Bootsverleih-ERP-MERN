import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { booteRouter, userRouter } from "./routes/index.js";

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/v1/images", express.static("uploads"));
app.use("/api/v1/boot", booteRouter);
app.use("/api/v1/users", userRouter);

const serverListenToPort = () =>
    app.listen(PORT, () => console.log("Server listening on port", PORT));

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("Database connection successfull");
        serverListenToPort();
    })
    .catch((err) => {
        console.log("Error connecting to database!");
        console.log(err);
        console.log("Server will not start. Aborting...");
        process.exit();
    });