import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: 3000,
    credentials: true
})); 

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import freelancerRouter from './routes/freelancer.route.js';

//routes declaration
app.use("/api/v1/freelancers", freelancerRouter);


export default app;