import express from "express"
import { UserCreate, UserLogin } from "../controllers/user.controller.js";

const routes = express.Router();

routes.post("/login",UserLogin);
routes.post("/register",UserCreate);

export default routes