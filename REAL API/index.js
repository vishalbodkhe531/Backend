import express from "express"
import {home} from "./controllers/server.controller.js";
import userRoutes from "./routes/user.routes.js"
import { mongoConnection } from "./data/data.js";
mongoConnection()
const app=express()
// middlewares
app.use(express.json())
// routes
app.use('/api/user',userRoutes)

// request
app.get('/',home)

app.listen(4000,()=>{
    console.log(`server is working on port 4000`);
})