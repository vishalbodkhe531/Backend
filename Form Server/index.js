import express from "express"
import { config } from "dotenv";
import { databaseConnection } from "./config/data/data.js";
import {errorMiddleware} from "./middleware/error.middleware.js"
import UserRoutes from "./routes/user.routes.js";
import bodyParser from "body-parser";
config({path : "./config/.env"});
databaseConnection();

const server = express();

server.set("view engine","ejs");
server.set("views","./views");

server.use(bodyParser.urlencoded({extended : false}));

server.use(express.json());

server.use(express.static("./public"))

server.use("/api/user",UserRoutes)


server.get("/",async (req,res,next)=>{
    try {
        res.render("index")
    } catch (error) {
        next(error)
    }
})

server.get("/register",(req,res)=>{
    res.render("register")
})

server.get("/login",(req,res)=>{
    res.render("login")
})

server.use(errorMiddleware);
server.listen(process.env.PORT,()=>{
    console.log(`Server is workking on http://localhost:${process.env.PORT}`);
})