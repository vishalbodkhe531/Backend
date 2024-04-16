import express from "express"
import {home} from "./controllers/server.controller.js"
// import { userHome } from "../REAL API/controllers/user.controller";

const app = express();
app.use(express.json);

app.get("/api/v1/user",homeuser)

app.get("/",home)
app.listen(4000,()=>{
    console.log(`Server is working on : http://localhost:4000`);
})