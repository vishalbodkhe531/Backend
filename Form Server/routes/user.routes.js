import express from "express"
import { UserCreate, UserLogin, Userlogout } from "../controllers/user.controller.js";

const routes = express.Router();

routes.post("/login",UserLogin);
routes.post("/register",UserCreate);
routes.get("/logout",Userlogout)

export default routes