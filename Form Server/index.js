import express from "express"
import { config } from "dotenv";
import { DatabaseConnection } from "./config/data/data.js";
import routes from "./routes/user.routes.js";
import { errorMiddleware } from "./middleware/user.middleware.js";
import bodyParser from "body-parser";
config({path : "./config/.env"});
DatabaseConnection();


const server = express();

server.set("view engine","ejs");

server.use(bodyParser.urlencoded({extended : false}));

server.use(express.json());

server.use("/api/user",routes)

server.get("/",(req,res)=>{
    res.render("index",{
        path : "/login",
        btn : "Login"
    });
})

server.get("/login",(req,res)=>{
    res.render("login");
})

server.get("/register",(req,res)=>{
    res.render("register");
})



server.use(errorMiddleware);

server.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})