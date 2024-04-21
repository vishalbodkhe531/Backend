import express from "express"
import { UserCreate, UserLogin } from "../controllers/user.controllers.js";

const routes = express.Router();

routes.post("/login", UserLogin);
routes.post("/register", UserCreate);
// routes.get("/api/user/logout", (req, res, next) => {
//     try {
//         res.render("index", {
//             path: "/login",
//             btn: "login"
//         })
//     } catch (error) {
//         next(error)
//     }
// })
export default routes;