import express from "express"
import { UserCreate, UserLogin } from "../controllers/user.controller.js";

const routes = express.Router();

routes.post("/login",UserLogin);
routes.post("/register",UserCreate);
routes.get("/logout",(req,res) =>{
    try {
        res.render("index",{
            path : "/login",
            btn : "Login"
        })
    } catch (error) {
        
    }
})

export default routes